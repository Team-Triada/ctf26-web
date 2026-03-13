import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, MapPin, Users } from 'lucide-react';
import SponsorModal from '../components/SponsorModal';

// ─── Sponsor data ──────────────────────────────────────────────────────────────
const SPONSORS = {
    prize: {
        key: 'ottersec',
        name: 'OtterSec',
        logo: 'sponsor_logos/ottersec.png',
        tier: 'Prize Money Sponsor',
        tierColor: '#ef4444',
        website: 'https://osec.io',
        description:
            'OtterSec is a leading blockchain security firm specialising in smart-contract audits, penetration testing, and cutting-edge cryptography research. They are proud title sponsor of the prize pool for Triada CTF \'26.',
    },
    gold: {
        key: 'lorikeet',
        name: 'Lorikeet Sec',
        logo: 'sponsor_logos/lorikeet.png',
        tier: 'Gold Sponsor',
        tierColor: '#f59e0b',
        website: 'https://lorikeetsecurity.com',
        description:
            'Lorikeet Sec is an offensive-security consultancy focused on red teaming, vulnerability research, and building tomorrow\'s security talent through community events.',
    },
    merch: {
        key: 'blackperl',
        name: 'BlackPerl',
        logo: 'sponsor_logos/black_perl.png',
        tier: 'Merchandise Sponsor',
        tierColor: '#a3a3a3',
        website: 'https://blackperldfir.com',
        description:
            'BlackPerl is a cybersecurity training and certification platform that empowers aspiring professionals with hands-on labs, curated learning paths, and industry-recognised credentials.',
    },
    support: [
        {
            key: 'offsec',
            name: 'OffSec',
            logo: 'sponsor_logos/offsec.svg',
            tier: 'Support Sponsor',
            tierColor: '#a3a3a3',
            website: 'https://www.offsec.com',
            description:
                'OffSec (Offensive Security) is the organisation behind OSCP and Kali Linux. They provide industry-leading cybersecurity training and certifications trusted worldwide.',
        },
        {
            key: 'hackviser',
            name: 'Hackviser',
            logo: 'sponsor_logos/hackviser.svg',
            tier: 'Support Sponsor',
            tierColor: '#a3a3a3',
            website: 'https://hackviser.com',
            description:
                'Hackviser is a hands-on hacking platform offering realistic lab environments for CTF players, security students, and professionals to sharpen their offensive and defensive skills.',
        },
        {
            key: 'knightsquad',
            name: 'KnightSquad',
            logo: 'sponsor_logos/knightsquad.png',
            tier: 'Support Sponsor',
            tierColor: '#a3a3a3',
            website: 'https://knightsquad.academy/',
            description:
                'KnightSquad is a cybersecurity community and training collective dedicated to nurturing the next generation of ethical hackers through workshops, competitions, and peer learning.',
        },
        {
            key: 'xyz',
            name: 'XYZ',
            logo: 'sponsor_logos/xyz-logo-white_1.png',
            tier: 'Support Sponsor',
            tierColor: '#a3a3a3',
            website: 'https://gen.xyz',
            description:
                'XYZ is a leading domain registry powering the open internet with affordable, memorable .xyz domains — trusted by millions of websites and projects around the world.',
        },
        {
            key: 'hackerdna',
            name: 'HackerDNA',
            logo: 'sponsor_logos/hackerdna.svg',
            tier: 'Support Sponsor',
            tierColor: '#a3a3a3',
            website: 'https://hackerdna.com',
            description:
                'HackerDNA is a cybersecurity learning platform providing practical environments and pro memberships for aspiring cybersecurity professionals.',
        },
    ],
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Home() {
    const [activeSponsor, setActiveSponsor] = useState(null);
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

                    <motion.p variants={fadeInUp} className="text-sm md:text-lg text-white/50 max-w-md mx-auto mb-8 md:mb-10 font-light leading-relaxed">
                        A 24-hour offline Capture The Flag competition. Solo & Team-based. Skill-first. No gimmicks.
                    </motion.p>

                    {/* Meta pills */}
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center items-center">
                        <div className="inline-flex items-center gap-2 text-xs sm:text-sm leading-none border border-white/[0.08] bg-white/[0.03] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white/60">
                            <Calendar className="w-3 h-3 text-red-400/80 flex-shrink-0" />
                            <span>6th – 7th April 2026</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs sm:text-sm leading-none border border-green-500/20 bg-green-500/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-green-400">
                            <img src="sponsor_logos/yenepoya.png" alt="Yenepoya University" className="h-6 w-auto object-contain" />
                            <span>Yenepoya University, Bangalore</span>
                        </div>
                    </motion.div>

                    {/* Register CTA */}
                    <motion.div variants={fadeInUp} className="mt-10">
                        <Link to="/register"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-medium tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.2)]">
                            Register Now
                        </Link>
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
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
                        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-2">Backed by</p>
                        <h2 className="text-white">Sponsors & Partners</h2>
                    </motion.div>

                    {/* Prize Money Sponsor */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="mb-12">
                        <p className="text-sm tracking-[0.3em] uppercase text-red-400/80 mb-5 font-medium">Prize Money Sponsor</p>
                        <button onClick={() => setActiveSponsor(SPONSORS.prize)} className="focus:outline-none group text-left" aria-label="View OtterSec details">
                            <img src="sponsor_logos/ottersec.png" alt="OtterSec" className="max-h-16 md:max-h-18 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                            <p className="mt-2 text-[10px] text-white/25 tracking-widest uppercase group-hover:text-white/50 transition-colors">Click for details</p>
                        </button>
                    </motion.div>

                    {/* Gold + Merchandise Sponsors — side by side */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 mb-14">
                        {/* Gold Sponsor */}
                        <motion.div variants={fadeInUp}>
                            <p className="text-sm tracking-[0.3em] uppercase text-amber-400/80 mb-5 font-medium">Gold Sponsor</p>
                            <button onClick={() => setActiveSponsor(SPONSORS.gold)} className="focus:outline-none group text-left" aria-label="View Lorikeet Sec details">
                                <img src="sponsor_logos/lorikeet.png" alt="Lorikeet Sec" className="max-h-16 md:max-h-18 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                <p className="mt-2 text-[10px] text-white/25 tracking-widest uppercase group-hover:text-white/50 transition-colors">Click for details</p>
                            </button>
                        </motion.div>
                        {/* Merchandise Sponsor */}
                        <motion.div variants={fadeInUp}>
                            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-5 font-medium">Merchandise Sponsor</p>
                            <button onClick={() => setActiveSponsor(SPONSORS.merch)} className="focus:outline-none group text-left" aria-label="View BlackPerl details">
                                <img src="sponsor_logos/black_perl.png" alt="BlackPerl" className="max-h-20 md:max-h-22 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                                <p className="mt-2 text-[10px] text-white/25 tracking-widest uppercase group-hover:text-white/50 transition-colors">Click for details</p>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Support Sponsors */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-7 font-medium">Support Sponsors</p>
                        <div className="flex flex-wrap items-center gap-10 md:gap-16">
                            {SPONSORS.support.map((sponsor, i) => (
                                <motion.button
                                    key={i}
                                    variants={fadeInUp}
                                    onClick={() => setActiveSponsor(sponsor)}
                                    className="focus:outline-none group"
                                    aria-label={`View ${sponsor.name} details`}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-h-8 md:max-h-9 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacity-45 group-hover:opacity-80"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sponsor Modal */}
            {activeSponsor && (
                <SponsorModal sponsor={activeSponsor} onClose={() => setActiveSponsor(null)} />
            )}
        </>
    );
}
