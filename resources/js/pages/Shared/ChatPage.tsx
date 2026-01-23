import { useState, useEffect, useRef, useCallback } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/components/Layout';
import { MessageCircle, Send, Paperclip, Search, Users, X, Check, CheckCheck, Loader2 } from 'lucide-react';
import '@/bootstrap';
import { useTheme } from '@/contexts/ThemeContext';
import useTranslation from '@/hooks/useTranslation';

interface User {
    userId: number;
    userName: string;
    userEmail: string;
    role: string;
}

interface Conversation {
    conversationId: number;
    type: 'private' | 'group';
    name: string;
    courseId: number | null;
    courseName: string | null;
    otherUser: User | null;
    lastMessage: string | null;
    lastMessageAt: string;
    unreadCount: number;
}

interface Message {
    messageId: number;
    conversationId: number;
    senderId: number;
    senderName: string;
    type: 'text' | 'image' | 'file';
    content: string | null;
    filePath: string | null;
    fileName: string | null;
    isRead: boolean;
    createdAt: string;
}

interface Contact {
    userId: number;
    userName: string;
    role: string;
    courseIds?: number[];
}

interface ChatPageProps {
    conversations: Conversation[];
    auth: { user: User };
}

export default function ChatPage({ conversations: initialConversations, auth }: ChatPageProps) {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
    const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState<{ instructors: Contact[]; learners: Contact[] }>({ instructors: [], learners: [] });
    const [showContacts, setShowContacts] = useState(false);
    const [typingUser, setTypingUser] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load contacts
    useEffect(() => {
        fetch('/api/chat/contacts')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load contacts');
                return res.json();
            })
            .then(data => setContacts(data))
            .catch(err => console.error(err));
    }, []);

    // Subscribe to conversation channel
    useEffect(() => {
        if (!selectedConv) return;
        const channel = window.Echo.private(`conversation.${selectedConv.conversationId}`);
        channel.listen('.message.sent', (data: Message) => {
            // Check if we are the sender (to avoid duplicate from broadcast if we optimistic update)
            if (data.senderId !== auth.user.userId) {
                setMessages(prev => {
                    // Prevent duplicate if it's already there (rare but possible with race conditions)
                    if (prev.some(m => m.messageId === data.messageId)) return prev;
                    return [...prev, data];
                });
                // Mark as read
                fetch(`/api/chat/conversations/${selectedConv.conversationId}/read`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                    }
                }).catch(console.error);
            }
        });
        channel.listen('.messages.read', () => {
            setMessages(prev => prev.map(m => ({ ...m, isRead: true })));
        });
        channel.listen('.user.typing', (data: { userId: number; userName: string }) => {
            if (data.userId !== auth.user.userId) {
                setTypingUser(data.userName);
                if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
                typingTimeoutRef.current = setTimeout(() => setTypingUser(null), 3000);
            }
        });
        return () => {
            channel.stopListening('.message.sent');
            channel.stopListening('.messages.read');
            channel.stopListening('.user.typing');
            window.Echo.leave(`conversation.${selectedConv.conversationId}`);
        };
    }, [selectedConv, auth.user.userId]);

    // Load messages when conversation selected
    useEffect(() => {
        if (!selectedConv) return;
        setLoading(true);
        setError(null);
        fetch(`/api/chat/conversations/${selectedConv.conversationId}/messages`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to load messages');
                return res.json();
            })
            .then(data => {
                setMessages(data.messages);
                setLoading(false);
                // Scroll to bottom after messages load with a small delay
                setTimeout(() => {
                    if (messagesContainerRef.current) {
                        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                    }
                }, 100);
                // Mark as read
                fetch(`/api/chat/conversations/${selectedConv.conversationId}/read`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                    }
                }).catch(console.error);
            })
            .catch(err => {
                setError('Could not load messages. Please try again.');
                setLoading(false);
            });
    }, [selectedConv]);

    // Scroll to bottom on new messages
    const scrollToBottom = useCallback((instant = false) => {
        setTimeout(() => {
            if (messagesContainerRef.current) {
                if (instant) {
                    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                } else {
                    messagesContainerRef.current.scrollTo({
                        top: messagesContainerRef.current.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        }, 50);
    }, []);

    // Scroll when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const sendMessage = useCallback(async () => {
        if (!selectedConv || !newMessage.trim()) return;

        const content = newMessage;
        const tempId = Date.now(); // Tạo ID tạm thời

        // --- BẮT ĐẦU OPTIMISTIC UPDATE ---
        const optimisticMessage: Message = {
            messageId: tempId,
            conversationId: selectedConv.conversationId,
            senderId: auth.user.userId,
            senderName: auth.user.userName,
            type: 'text',
            content: content,
            filePath: null,
            fileName: null,
            isRead: false,
            createdAt: new Date().toISOString(),
        };

        // 1. Hiển thị tin nhắn ngay lập tức (0ms delay)
        setMessages(prev => [...prev, optimisticMessage]);

        // 2. Xóa ô nhập liệu ngay lập tức
        setNewMessage('');
        setError(null);
        // --- KẾT THÚC OPTIMISTIC UPDATE ---

        try {
            const res = await fetch(`/api/chat/conversations/${selectedConv.conversationId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify({ content }),
            });

            if (!res.ok) throw new Error('Failed to send message');

            const data = await res.json();

            // Cập nhật lại danh sách tin nhắn để thay thế tin nhắn tạm bằng tin nhắn thật từ DB
            setMessages(prev => {
                // Loại bỏ tin nhắn tạm (tempId) và thêm tin nhắn thật (data)
                const filtered = prev.filter(m => m.messageId !== tempId);
                // Kiểm tra trùng lặp lần cuối với dữ liệu từ Echo
                if (filtered.some(m => m.messageId === data.messageId)) return filtered;
                return [...filtered, { ...data, senderId: auth.user.userId, senderName: auth.user.userName, type: 'text', isRead: false }];
            });

        } catch (error) {
            console.error('Failed to send message:', error);
            setError('Không thể gửi tin nhắn. Vui lòng thử lại.');

            // Nếu lỗi, xóa tin nhắn tạm và trả lại nội dung vào ô nhập
            setMessages(prev => prev.filter(m => m.messageId !== tempId));
            setNewMessage(content);
        }
    }, [selectedConv, newMessage, auth.user]);
    const handleTyping = useCallback(() => {
        if (!selectedConv) return;
        fetch(`/api/chat/conversations/${selectedConv.conversationId}/typing`, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
            }
        }).catch(() => { });
    }, [selectedConv]);

    const startConversation = async (contact: Contact) => {
        const courseId = contact.courseIds?.[0] || null;
        try {
            const res = await fetch('/api/chat/conversations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify({ targetUserId: contact.userId, courseId }),
            });
            if (!res.ok) throw new Error('Failed to start conversation');
            const data = await res.json();

            // Refresh conversations
            const convsRes = await fetch('/api/chat/conversations');
            if (convsRes.ok) {
                const convsData = await convsRes.json();
                setConversations(convsData);
                const newConv = convsData.find((c: Conversation) => c.conversationId === data.conversationId);
                if (newConv) setSelectedConv(newConv);
            }
            setShowContacts(false);
        } catch (err) {
            console.error(err);
            setError('Failed to start conversation.');
        }
    };

    const handleFileUpload = async (file: File) => {
        if (!selectedConv) return;
        const formData = new FormData();
        formData.append('file', file);

        const tempId = Date.now();
        const isImage = file.type.startsWith('image/');

        // Optimistic update for file upload
        const optimisticMessage: Message = {
            messageId: tempId,
            conversationId: selectedConv.conversationId,
            senderId: auth.user.userId,
            senderName: auth.user.userName,
            type: isImage ? 'image' : 'file',
            content: null,
            filePath: URL.createObjectURL(file), // Temporary blob URL
            fileName: file.name,
            isRead: false,
            createdAt: new Date().toISOString(),
        };
        setMessages(prev => [...prev, optimisticMessage]);

        try {
            const res = await fetch(`/api/chat/conversations/${selectedConv.conversationId}/upload`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: formData
            });

            if (!res.ok) throw new Error('Upload failed');

            const data = await res.json();

            // Replace optimistic message with real data
            setMessages(prev => {
                const filtered = prev.filter(m => m.messageId !== tempId);
                if (filtered.some(m => m.messageId === data.messageId)) return filtered;
                return [...filtered, {
                    messageId: data.messageId,
                    conversationId: selectedConv.conversationId,
                    senderId: auth.user.userId,
                    senderName: auth.user.userName,
                    type: data.type,
                    content: null,
                    filePath: data.filePath,
                    fileName: data.fileName,
                    isRead: false,
                    createdAt: new Date().toISOString(),
                }];
            });
        } catch (err) {
            console.error(err);
            setError('Failed to upload file.');
            // Remove optimistic message on error
            setMessages(prev => prev.filter(m => m.messageId !== tempId));
        }
    };

    const filteredConversations = conversations.filter(c =>
        c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.courseName?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatTime = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <Layout user={auth.user} renderFooter={false}>
            <Head title="Chat" />
            <div className="flex h-[calc(100vh-80px)] bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Sidebar */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-800 flex flex-col relative bg-gray-50 dark:bg-black flex-none">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex-none">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <MessageCircle className="w-6 h-6 text-green-950 dark:text-white" />
                                {t('messages') || 'Tin nhắn'}
                            </h1>
                            <button onClick={() => setShowContacts(!showContacts)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>
                        </div>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                            <input type="text" placeholder={t('search') || "Tìm kiếm..."} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-green-950 dark:focus:border-white" />
                        </div>
                    </div>

                    {/* Contacts Panel - Absolute positioned over sidebar */}
                    {showContacts && (
                        <div className="absolute inset-0 bg-white dark:bg-black z-20 flex flex-col animate-in slide-in-from-left duration-200">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-black flex-none">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t('contacts') || 'Liên hệ mới'}</h2>
                                <button onClick={() => setShowContacts(false)}><X className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {contacts.instructors?.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{t('instructors') || 'Giảng viên'}</h3>
                                        {contacts.instructors.map(c => (
                                            <button key={c.userId} onClick={() => startConversation(c)}
                                                className="w-full p-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                                <div className="w-10 h-10 bg-green-950 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                                                    {c.userName[0]}
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-900 dark:text-white font-medium">{c.userName}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Giảng viên</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {contacts.learners?.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{t('students') || 'Học viên'}</h3>
                                        {contacts.learners.map(c => (
                                            <button key={c.userId} onClick={() => startConversation(c)}
                                                className="w-full p-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full flex items-center justify-center font-bold">
                                                    {c.userName[0]}
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-gray-900 dark:text-white font-medium">{c.userName}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Học viên</p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Conversation List */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {filteredConversations.map(conv => (
                            <button key={conv.conversationId} onClick={() => setSelectedConv(conv)}
                                className={`w-full p-4 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 ${selectedConv?.conversationId === conv.conversationId ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full flex items-center justify-center font-bold text-lg flex-none">
                                    {conv.name?.[0] || '?'}
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-900 dark:text-white font-medium truncate">{conv.name}</p>
                                        {conv.unreadCount > 0 && (
                                            <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">{conv.unreadCount}</span>
                                        )}
                                    </div>
                                    <p className={`text-sm truncate ${conv.unreadCount > 0 ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {conv.lastMessage || (t('noMessages') || 'Chưa có tin nhắn')}
                                    </p>
                                    {conv.courseName && <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{conv.courseName}</p>}
                                </div>
                            </button>
                        ))}
                        {filteredConversations.length === 0 && (
                            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                <p>{t('noConversations') || 'Chưa có cuộc trò chuyện nào'}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 min-w-0">
                    {selectedConv ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3 bg-white dark:bg-black/50 backdrop-blur-sm sticky top-0 z-10 flex-none">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded-full flex items-center justify-center font-bold">
                                    {selectedConv.name?.[0] || '?'}
                                </div>
                                <div>
                                    <h2 className="text-gray-900 dark:text-white font-semibold">{selectedConv.name}</h2>
                                    {selectedConv.courseName && <p className="text-sm text-gray-500 dark:text-gray-400">{selectedConv.courseName}</p>}
                                    {typingUser && <p className="text-sm text-green-600 dark:text-green-400 animate-pulse">{typingUser} {t('isTyping') || 'đang nhập...'}</p>}
                                </div>
                            </div>

                            {/* Messages */}
                            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/20 custom-scrollbar">
                                {messages.map(msg => (
                                    <div key={msg.messageId} className={`flex ${msg.senderId === auth.user.userId ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${msg.senderId === auth.user.userId
                                            ? 'bg-green-950 text-white dark:bg-white dark:text-black'
                                            : 'bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                                            }`}>
                                            {msg.senderId !== auth.user.userId && (
                                                <p className="text-xs text-green-950/60 dark:text-gray-400 mb-1">{msg.senderName}</p>
                                            )}
                                            {msg.type === 'text' && <p>{msg.content}</p>}
                                            {msg.type === 'image' && <img src={msg.filePath || ''} alt="Shared" className="rounded-lg max-w-full" onLoad={() => scrollToBottom()} />}
                                            {msg.type === 'file' && (
                                                <a href={msg.filePath || ''} target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-2">
                                                    <Paperclip className="w-4 h-4" /> {msg.fileName}
                                                </a>
                                            )}
                                            <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${msg.senderId === auth.user.userId ? 'text-white/70 dark:text-black/60' : 'text-gray-400'
                                                }`}>
                                                <span>{formatTime(msg.createdAt)}</span>
                                                {msg.senderId === auth.user.userId && (
                                                    msg.isRead ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex-none">
                                {error && (
                                    <div className="mb-2 text-sm text-red-600 dark:text-red-400">{error}</div>
                                )}
                                <div className="flex items-center gap-2">
                                    <label className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                                        <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                        <input type="file" className="hidden" onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleFileUpload(file);
                                        }} />
                                    </label>
                                    <input type="text" value={newMessage}
                                        onChange={e => { setNewMessage(e.target.value); handleTyping(); }}
                                        onKeyPress={e => e.key === 'Enter' && sendMessage()}
                                        placeholder={t('typeMessage') || "Nhập tin nhắn..."}
                                        className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-transparent focus:border-green-950 dark:focus:border-white rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none transition-all"
                                    />
                                    <button onClick={sendMessage} disabled={!newMessage.trim()}
                                        className="p-2 bg-green-950 hover:bg-green-900 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors">
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-black/20">
                            <MessageCircle className="w-16 h-16 mb-4 opacity-50" />
                            <p className="text-lg">{t('selectConversation') || 'Chọn một cuộc trò chuyện để bắt đầu'}</p>
                            <button onClick={() => setShowContacts(true)} className="mt-4 px-6 py-2 bg-green-950 text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity">
                                {t('startNewConversation') || 'Bắt đầu cuộc trò chuyện mới'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
