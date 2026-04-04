import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Shield, CheckCircle2, AlertTriangle } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Registration() {
    useEffect(() => { document.title = "Register — TRIADA CTF '26"; }, []);

    return (
        <section className="py-10 px-5 md:px-10 max-w-5xl mx-auto min-h-screen">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                
                {/* Header Section */}
                <motion.div variants={fadeInUp} className="mb-12 text-center">
                    <h1 className="text-white mb-6 text-4xl md:text-5xl">
                        Register for <span className="text-red-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Triada</span> CTF '26
                    </h1>
                    <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Triada CTF '26 is a 24-hour onsite Capture The Flag competition organized at Yenepoya (Deemed to be University), Bangalore Campus. The competition brings together students to solve real-world cybersecurity challenges across multiple domains including web security, cryptography, reverse engineering, forensics, and more.
                    </p>
                </motion.div>

                {/* Registration Fee */}
                <motion.div variants={fadeInUp} className="mb-12">
                    <h2 className="text-white text-2xl md:text-3xl mb-6 text-center">Registration Fee</h2>
                    <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-6 max-w-md mx-auto">
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="py-3 text-white/70">Until 20 March 2026</td>
                                    <td className="py-3 text-white text-right">Solo – ₹250 | Duo Team – ₹500</td>
                                </tr>
                                <tr>
                                    <td className="py-3 text-white/70">After 20 March 2026</td>
                                    <td className="py-3 text-white text-right">Solo – ₹300 | Duo Team – ₹500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Info Cards */}
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                            <Clock className="w-4 h-4 text-red-400" />
                        </div>
                        <h3 className="mb-1 text-white text-sm font-medium">Duration</h3>
                        <p className="text-xs text-white/50">24 Hours</p>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                            <Shield className="w-4 h-4 text-red-400" />
                        </div>
                        <h3 className="mb-1 text-white text-sm font-medium">Format</h3>
                        <p className="text-xs text-white/50">Jeopardy-style CTF</p>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                            <MapPin className="w-4 h-4 text-red-400" />
                        </div>
                        <h3 className="mb-1 text-white text-sm font-medium">Location</h3>
                        <p className="text-xs text-white/50">Yenepoya (Deemed to be University), Bangalore</p>
                    </motion.div>
                </motion.div>

                {/* Call to action */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-20 text-center">
                    <div className="flex flex-col items-center gap-5">
                        <span className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-white/60 text-sm font-medium tracking-[0.1em] uppercase rounded-full cursor-not-allowed select-none">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Registration Closed
                        </span>
                        <CountdownTimer />
                        <p className="text-[10px] text-white/30 tracking-wider">REGISTRATIONS ARE CLOSED</p>
                    </div>
                </motion.div>

                {/* Sponsors Footer Section */}
                <motion.div variants={fadeInUp} className="text-center pb-8">
                    <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">Generously Supported By</p>
                    <p className="text-sm text-white/50 leading-relaxed font-mono">
                        OtterSec | Lorikeet Security | BlackPerl | OffSec | Knight Squad Academy | XYZ | Hackviser | HackerDNA.com
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}
