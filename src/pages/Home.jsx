import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Shield, MapPin, Users } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Home() {
    useEffect(() => { document.title = "TRIADA CTF '26 — 24-Hour Offline Capture The Flag Competition | April 2026"; }, []);
    return (
        <>
            {/* Hero Section — moved up with less top padding */}
            <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-5 pt-0 pb-16 border-b border-white/[0.07]">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl mx-auto w-full">
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-red-500/30 rounded-full text-xs tracking-[0.2em] text-red-400 uppercase bg-red-500/5">
                            Second Edition &middot; April 2026
                        </span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-white mb-4">
                        <span className="text-red-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Triada</span> CTF '26
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/50 max-w-md mx-auto mb-10 font-light leading-relaxed">
                        A 24-hour offline Capture The Flag competition. Solo & Team-based. Skill-first. No gimmicks.
                    </motion.p>

                    {/* Meta pills */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5 justify-center items-center">
                        <div className="inline-flex items-center gap-2 text-sm leading-none border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 rounded-full text-white/60">
                            <Calendar className="w-3 h-3 text-red-400/80 flex-shrink-0" />
                            <span>5th – 6th April 2026</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm leading-none border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 rounded-full text-white/60">
                            <MapPin className="w-3 h-3 text-red-400/80 flex-shrink-0" />
                            <span>Yenepoya University, Bangalore</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Event Highlights Section */}
            <section className="py-20 px-5 md:px-10 border-b border-white/[0.07]">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2">What to expect</p>
                        <h2 className="text-white">Event Highlights</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {[
                            {
                                icon: <Users className="w-4 h-4 text-red-400" />,
                                title: "Solo / Duo Format",
                                desc: "Compete solo or as a 2-member team. Bring your laptops — and your best ally if you have one."
                            },
                            {
                                icon: <Clock className="w-4 h-4 text-red-400" />,
                                title: "24 Hour Sprint",
                                desc: "A continuous, fully offline experience. Test your endurance and creativity overnight."
                            },
                            {
                                icon: <Shield className="w-4 h-4 text-red-400" />,
                                title: "Real-World Challenges",
                                desc: "From beginner-friendly to advanced — practical, carefully designed problems. Not guesswork."
                            }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp}
                                className="bg-white/[0.02] border border-white/[0.07] p-7 rounded-[1.75rem] hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="mb-2 text-white">{item.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section id="sponsors" className="py-20 px-5 md:px-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2">Backed by</p>
                        <h2 className="text-white">Sponsors & Partners</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="flex flex-wrap justify-start items-center gap-8 md:gap-16"
                    >
                        {[
                            { name: "Ottersec", src: "sponsor_logos/ottersec.png" },
                            { name: "Lorikeet", src: "sponsor_logos/lorikeet.png" },
                            { name: "Offsec", src: "sponsor_logos/offsec.svg" },
                            { name: "Hackviser", src: "sponsor_logos/hackviser.svg" },
                        ].map((sponsor, i) => (
                            <motion.img
                                key={i}
                                variants={fadeInUp}
                                src={sponsor.src}
                                alt={sponsor.name}
                                className="max-h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 opacity-50 hover:opacity-90"
                            />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
