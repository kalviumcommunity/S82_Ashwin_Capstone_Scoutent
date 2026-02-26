import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MessagesPage() {
    const navigate = useNavigate();

    const mockConversations = [
        {
            id: 1,
            name: "Alex Carter",
            role: "Head Scout — FC Rovers",
            preview: "Great footage from last week's match. I'd love to schedule a call...",
            time: "2h ago",
            unread: 2,
            avatar: "AC",
        },
        {
            id: 2,
            name: "Priya Nair",
            role: "Talent Recruiter — City FC",
            preview: "Your ScoutPoint score caught my attention. Very impressive stats.",
            time: "1d ago",
            unread: 0,
            avatar: "PN",
        },
        {
            id: 3,
            name: "James Holden",
            role: "Academy Director — United Youth",
            preview: "We have an open trial next month — are you available?",
            time: "3d ago",
            unread: 1,
            avatar: "JH",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#CEFF00] selection:text-black">
            {/* Nav */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/90 backdrop-blur-md border-b border-white/10"
            >
                <div
                    className="text-white text-3xl font-black tracking-tighter italic cursor-pointer"
                    onClick={() => navigate("/playerhomepage")}
                >
                    SCOUT<span className="text-[#CEFF00]">ENT</span>
                </div>
                <button
                    onClick={() => navigate("/playerhomepage")}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#CEFF00] transition-colors text-sm font-bold uppercase tracking-widest"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Dashboard
                </button>
            </motion.nav>

            <div className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-[#CEFF00] text-xs font-black uppercase tracking-[0.3em] mb-3">
                        Inbox
                    </p>
                    <h1 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
                        Messages
                    </h1>
                    <div className="h-[2px] w-20 bg-[#CEFF00] mt-6" />
                </motion.div>

                {/* Conversations List */}
                <div className="flex flex-col gap-3">
                    {mockConversations.map((conv, i) => (
                        <motion.div
                            key={conv.id}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                            whileHover={{ x: 6 }}
                            className="group flex items-center gap-5 p-5 border border-white/10 hover:border-[#CEFF00]/50 bg-white/2 hover:bg-[#CEFF00]/5 transition-all duration-300 cursor-pointer"
                        >
                            {/* Avatar */}
                            <div className="w-12 h-12 bg-white/10 group-hover:bg-[#CEFF00] flex items-center justify-center text-white group-hover:text-black font-black text-sm transition-colors duration-300 shrink-0">
                                {conv.avatar}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-white font-black text-base">{conv.name}</span>
                                    <span className="text-gray-600 text-xs">{conv.time}</span>
                                </div>
                                <p className="text-[#CEFF00] text-xs font-bold uppercase tracking-wider mb-1">
                                    {conv.role}
                                </p>
                                <p className="text-gray-500 text-sm truncate group-hover:text-gray-300 transition-colors">
                                    {conv.preview}
                                </p>
                            </div>

                            {/* Unread badge */}
                            {conv.unread > 0 && (
                                <div className="w-6 h-6 bg-[#CEFF00] rounded-full flex items-center justify-center text-black text-xs font-black shrink-0">
                                    {conv.unread}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Coming soon notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 p-6 border border-dashed border-white/10 text-center"
                >
                    <p className="text-gray-600 text-sm uppercase tracking-widest font-bold">
                        Full messaging system — Coming Soon
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
