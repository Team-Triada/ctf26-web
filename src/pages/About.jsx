import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function About() {
    return (
        <div className="px-5 md:px-10 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                {/* Page Header */}
                <div className="py-16 md:py-20 max-w-2xl border-b border-white/[0.07] mb-12">
                    <motion.p variants={fadeInUp} className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
                        The Competition
                    </motion.p>
                    <motion.h1 variants={fadeInUp} className="text-white mb-5">
                        About TRIADA CTF '26
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-base text-white/50 font-light leading-relaxed">
                        A 24-hour offline cybersecurity competition designed for students passionate about ethical hacking, problem solving, and hands-on security challenges.
                    </motion.p>
                </div>

                {/* The Experience */}
                <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 md:p-12 rounded-[2rem] mb-6 hover:-translate-y-0.5 transition-transform duration-500">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">What you're in for</p>
                    <h2 className="text-white mb-5">The Experience</h2>
                    <p className="text-sm text-white/60 leading-relaxed font-light mb-3">
                        Participants will compete in a high-intensity environment, solving realistic challenges that test technical creativity, analytical thinking, and practical security skills.
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                        Whether you're a seasoned CTF player or exploring offensive security for the first time, TRIADA CTF is built to challenge and inspire. No prior competition experience required — only curiosity and persistence.
                    </p>
                </motion.div>

                {/* Challenge Categories + Why */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 rounded-[2rem] hover:-translate-y-0.5 transition-transform duration-500">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Disciplines</p>
                        <h3 className="text-white mb-6">Challenge Categories</h3>
                        <ul className="space-y-2.5 text-sm text-white/60 font-light">
                            {["Web Exploitation", "Digital Forensics", "Reverse Engineering", "Cryptography", "Binary Exploitation (Pwn)", "OSINT / Miscellaneous"].map((cat, i) => (
                                <li key={i} className="flex items-center gap-2.5">
                                    <span className="w-1 h-1 bg-red-500 rounded-full flex-shrink-0 opacity-80"></span>
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 rounded-[2rem] hover:-translate-y-0.5 transition-transform duration-500">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Our philosophy</p>
                        <h3 className="text-white mb-6">Why TRIADA CTF?</h3>
                        <ul className="space-y-3.5 text-sm text-white/60 font-light">
                            {[
                                "Skill development over gimmicks",
                                "Realistic challenge design",
                                "Competitive yet collaborative culture",
                                "Meaningful industry interaction"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <span className="text-red-400 text-xs mt-0.5 flex-shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Participate CTA */}
                <motion.div variants={fadeInUp} className="py-16 md:py-20 border-t border-white/[0.07]">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Open to all</p>
                    <h2 className="text-white mb-4">Who Can Participate?</h2>
                    <p className="text-sm text-white/50 mb-8 max-w-md font-light leading-relaxed">
                        Open to university and college students, cybersecurity enthusiasts, learners, and experienced players alike.
                    </p>
                    <a href="https://ctf.triada.in"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black hover:bg-red-600 hover:text-white transition-colors duration-300 rounded-full text-sm font-bold tracking-[0.1em] uppercase">
                        Register Your Duo →
                    </a>
                </motion.div>

            </motion.div>
        </div>
    );
}
