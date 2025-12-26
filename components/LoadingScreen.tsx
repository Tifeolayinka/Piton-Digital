import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence timing
        const sequence = [
            { time: 500, step: 1 },  // Client message
            { time: 1500, step: 2 }, // Typing indicator
            { time: 3500, step: 3 }, // Piton message
            { time: 5500, step: 4 }, // Complete
        ];

        const timeouts = sequence.map(({ time, step: s }) =>
            setTimeout(() => {
                setStep(s);
                if (s === 4) onComplete();
            }, time)
        );

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#E5DDD5] flex flex-col items-center justify-center font-sans"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            {/* Chat Container */}
            <div className="w-full max-w-md px-4 space-y-4">

                {/* Client Message */}
                {step >= 1 && (
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="flex justify-start items-end gap-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                            alt="Client"
                            className="w-8 h-8 rounded-full object-cover mb-1 shadow-sm"
                        />
                        <div className="bg-white text-black px-4 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-sm max-w-[80%] relative">
                            <div className="absolute top-0 -left-2 w-4 h-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
                            <p className="text-sm md:text-base">Hi! 👋</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">10:00 AM</span>
                        </div>
                    </motion.div>
                )}

                {/* Typing Indicator */}
                {step === 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex justify-end items-end gap-3"
                    >
                        <div className="bg-[#DCF8C6] px-4 py-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-sm relative">
                            <div className="absolute top-0 -right-2 w-4 h-4 bg-[#DCF8C6] [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                            <div className="flex gap-1">
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-green-600 rounded-full" />
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-green-600 rounded-full" />
                                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-green-600 rounded-full" />
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                            alt="Piton"
                            className="w-8 h-8 rounded-full object-cover mb-1 shadow-sm"
                        />
                    </motion.div>
                )}

                {/* Piton Message */}
                {step >= 3 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="flex justify-end items-end gap-3"
                    >
                        <div className="bg-[#DCF8C6] text-black px-4 py-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-sm max-w-[80%] relative">
                            <div className="absolute top-0 -right-2 w-4 h-4 bg-[#DCF8C6] [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                            <p className="text-sm md:text-base">We turn ambitious ideas into high-performance digital products. ⚡️</p>
                            <span className="text-[10px] text-green-800/60 block text-right mt-1">10:01 AM</span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                            alt="Piton"
                            className="w-8 h-8 rounded-full object-cover mb-1 shadow-sm"
                        />
                    </motion.div>
                )}

            </div>

            {/* Loading Indicator */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Loading</span>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
