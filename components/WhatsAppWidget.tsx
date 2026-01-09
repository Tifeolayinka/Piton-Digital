import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "2348068159010";
    const message = "Hi Tife, I'm interested in working with you!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[320px] bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#075E54] p-4 flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://piton-digital.s3.eu-north-1.amazonaws.com/Portfolio+Image.JPG"
                                        alt="Tife"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Tife Olayinka</h4>
                                <p className="text-white/70 text-[10px] uppercase tracking-widest">Typically replies in minutes</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="ml-auto text-white/50 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-[#E5DDD5] relative min-h-[120px] flex flex-col gap-4">
                            {/* Chat Bubble */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative"
                            >
                                <p className="text-zinc-800 text-sm leading-relaxed">
                                    Hey there! 👋 How can I help you today?
                                </p>
                                <span className="text-[9px] text-zinc-400 mt-1 block text-right">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {/* Triangle pointer */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent"></div>
                            </motion.div>
                        </div>

                        {/* Footer/CTA */}
                        <div className="p-4 bg-white">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <Send size={16} />
                                Start Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors relative ${isOpen ? 'bg-zinc-900 text-white' : 'bg-[#25D366] text-white'}`}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
