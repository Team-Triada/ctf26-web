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

export default function Rules() {
    return (
        <div className="px-5 md:px-10 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                {/* Page Header */}
                <div className="py-16 md:py-20 max-w-2xl border-b border-white/[0.07] mb-12">
                    <motion.p variants={fadeInUp} className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">
                        The Arena
                    </motion.p>
                    <motion.h1 variants={fadeInUp} className="text-white mb-5">
                        Rules & FAQ
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-base text-white/50 font-light leading-relaxed">
                        Everything you need to know before stepping into the arena.
                    </motion.p>
                </div>

                {/* Rules + Format Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {/* Rules */}
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 rounded-[2rem] hover:-translate-y-0.5 transition-transform duration-500">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Ground rules</p>
                        <h2 className="text-white mb-2">Rules & Fair Play</h2>
                        <p className="text-xs text-white/40 mb-7 font-light italic">Full rulebook provided before the event.</p>
                        <ul className="space-y-3.5 text-sm text-white/70">
                            <li className="flex gap-2.5 items-start"><span className="text-red-400 flex-shrink-0 font-bold">✗</span>No attacks on event infrastructure</li>
                            <li className="flex gap-2.5 items-start"><span className="text-red-400 flex-shrink-0 font-bold">✗</span>No disruption or DDOS of other teams</li>
                            <li className="flex gap-2.5 items-start"><span className="text-red-400 flex-shrink-0 font-bold">✗</span>No sharing of flags or solutions</li>
                            <li className="flex gap-2.5 items-start"><span className="text-green-400 flex-shrink-0 font-bold">✓</span>Follow competition guidelines gracefully</li>
                        </ul>
                    </motion.div>

                    {/* Format */}
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 rounded-[2rem] hover:-translate-y-0.5 transition-transform duration-500">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">How it works</p>
                        <h2 className="text-white mb-5">Event Format</h2>
                        <p className="text-sm text-white/60 font-light leading-relaxed mb-7">
                            A <strong className="text-white font-medium">Jeopardy-style</strong> CTF running continuously for <strong className="text-white font-medium">24 hours</strong>.
                        </p>
                        <div className="p-5 bg-white/[0.03] rounded-xl border border-white/[0.06] text-center">
                            <p className="font-mono text-xs tracking-[0.12em] text-white/40 leading-loose">
                                Harder challenge → Higher points → Better ranking
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Schedule */}
                <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-8 md:p-12 rounded-[2rem] mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3 relative z-10">Timeline</p>
                    <h2 className="text-white mb-10 relative z-10">Schedule Overview</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {[
                            { day: "Day 1", items: ["Registration & Check-in", "Opening Briefing", "Competition Begins"] },
                            { day: "Overnight", items: ["Continuous Challenge Solving", "Live Scoreboard & Rankings", "Midnight Snacks & Red Bull"] },
                            { day: "Day 2", items: ["Competition Ends", "Results & Prize Distribution"] }
                        ].map((block, i) => (
                            <div key={i} className="border-l border-red-500/30 pl-5 hover:border-red-500/60 transition-colors duration-300">
                                <h3 className="text-white mb-3">{block.day}</h3>
                                <ul className="space-y-2 text-sm text-white/50 font-light">
                                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-white/30 text-xs mt-10 italic tracking-wide relative z-10">
                        * Exact timings will be shared with registered participants.
                    </p>
                </motion.div>

                {/* FAQ */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Common questions</p>
                    <h2 className="text-white mb-8">FAQ</h2>
                    <div className="space-y-3">
                        {[
                            { q: "Do I need prior CTF experience?", a: "No. Beginners are absolutely welcome and encouraged to learn!" },
                            { q: "Can I participate solo?", a: "No. Teams must have exactly 2 members to participate in the Duo Format." },
                            { q: "Is internet access allowed?", a: "Event guidelines will clarify allowed resources during the opening briefing." },
                            { q: "What should I bring?", a: "Laptop, charger, curiosity, and stamina." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/[0.07] p-6 md:p-7 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors duration-300">
                                <h3 className="text-white mb-2">{faq.q}</h3>
                                <p className="text-sm text-white/50 font-light leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}
