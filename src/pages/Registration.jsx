import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, MapPin, Shield, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

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
                    
                    <div className="mt-8">
                        <div className="inline-flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl max-w-2xl mx-auto text-left mb-6">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <p className="text-sm text-yellow-500/90 leading-tight">
                                This registration is only for participants from institutions other than Yenepoya University.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Info Cards */}
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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
                    
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                        <div className="w-8 h-8 rounded-lg bg-Amber-500/10 border border-Amber-500/20 flex items-center justify-center mb-4 text-amber-500">
                            <Trophy className="w-4 h-4" />
                        </div>
                        <h3 className="mb-1 text-white text-sm font-medium">Prize Pool</h3>
                        <p className="text-xs text-white/50">₹2,40,000+</p>
                    </motion.div>
                </motion.div>

                {/* Call to action */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-20 text-center">
                    <div>
                        <a href="https://forms.gle/Xz2Dc87ih3iD6zmKA" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-black text-sm font-medium tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.2)]">
                            Register Now <ExternalLink className="w-4 h-4" />
                        </a>
                        <p className="mt-4 text-[10px] text-white/40 tracking-wider">REGISTRATIONS ARE OPEN FOR EXTERNAL PARTICIPANTS</p>
                    </div>
                </motion.div>

                {/* Prizes Section */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2 border-b border-white/10 pb-4">What's at stake</p>
                    <h2 className="text-white text-2xl md:text-3xl mb-10 mt-6">Prize Breakdown</h2>
                    
                    <div className="space-y-6">
                        {/* 1st Prize */}
                        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-6 md:p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
                                <Trophy className="w-24 h-24 text-amber-400" />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.07]">
                                <h3 className="text-xl md:text-2xl font-medium text-amber-400">1st Prize</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400/80 text-xs font-mono">
                                    Total Worth: ~₹1,12,547
                                </div>
                            </div>
                            <ul className="space-y-3 z-10 relative">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">₹10,000 Cash</strong> – Sponsored by OtterSec</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× HackerDNA.com Pro Membership (6 months)</strong> – worth ₹16,900</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× Proving Grounds Practice Subscriptions (5 months)</strong> – Offsec – worth ₹15,800</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× kWAPTA Exam Vouchers</strong> – Knightsquad Academy – worth ₹12,400</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× 1-year .xyz Domain</strong> – worth ₹1,200</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">On-demand access to BCSA + 2 years of Pwndora access</strong> – Blackperl – worth ₹56,247</span></li>
                            </ul>
                        </div>

                        {/* 2nd Prize */}
                        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-6 md:p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
                                <Trophy className="w-24 h-24 text-gray-400" />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.07]">
                                <h3 className="text-xl md:text-2xl font-medium text-gray-300">2nd Prize</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-400/10 text-gray-400/80 text-xs font-mono">
                                    Total Worth: ~₹85,647
                                </div>
                            </div>
                            <ul className="space-y-3 z-10 relative">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">₹6,000 Cash</strong> – Sponsored by OtterSec</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× Proving Grounds Practice Subscriptions (5 months)</strong> – Offsec – worth ₹15,800</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× kWAPTA Exam Vouchers</strong> – Knightsquad Academy – worth ₹12,400</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× 1-year .xyz Domain</strong> – worth ₹1,200</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">On-demand access to BCSA + 1 year of Pwndora access</strong> – Blackperl – worth ₹50,247</span></li>
                            </ul>
                        </div>

                        {/* 3rd Prize */}
                        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-6 md:p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
                                <Trophy className="w-24 h-24 text-amber-600" />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.07]">
                                <h3 className="text-xl md:text-2xl font-medium text-amber-600">3rd Prize</h3>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/10 text-amber-600/80 text-xs font-mono">
                                    Total Worth: ~₹39,400
                                </div>
                            </div>
                            <ul className="space-y-3 z-10 relative">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">₹4,000 Cash</strong> – Sponsored by OtterSec</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× Proving Grounds Practice Subscriptions (5 months)</strong> – Offsec – worth ₹15,800</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× kWAPTA Exam Vouchers</strong> – Knightsquad Academy – worth ₹12,400</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">2× 1-year .xyz Domain</strong> – worth ₹1,200</span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">1 year of Pwndora access</strong> – Blackperl – worth ₹6,000</span></li>
                            </ul>
                        </div>
                        
                        {/* Top 3 Individuals */}
                        <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-6 hover:bg-white/[0.04] transition-colors">
                            <h3 className="text-lg md:text-xl font-medium text-white mb-4">Top 3 Individuals</h3>
                            <ul className="space-y-2 z-10">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"/> <span><strong className="text-white/90">1-month VIP Membership each</strong> – Hackviser (~₹830 each, total ~₹2,490)</span></li>
                            </ul>
                        </div>
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
