import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Award, Users, Globe, CheckCircle2 } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Prizes() {
    useEffect(() => { document.title = "Prizes — TRIADA CTF '26"; }, []);

    return (
        <section className="py-10 px-5 md:px-10 max-w-6xl mx-auto min-h-screen">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                {/* Hero Section */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h1 className="text-white mb-6 text-4xl md:text-5xl">
                        The <span className="text-red-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Prize Pool</span>
                    </h1>
                    <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                        ₹4,30,000+
                    </div>
                    <p className="text-lg text-white/70 mb-2">
                        in Cash, Certifications, Subscriptions, Domains, and Giveaways
                    </p>
                    <p className="text-sm text-white/50 max-w-2xl mx-auto mb-8">
                        Rewarding the top teams and standout performers of the biggest offline CTF experience of 2026.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <span className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/15 text-white/60 text-sm font-medium tracking-[0.1em] uppercase rounded-full cursor-not-allowed select-none">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Registration Closed
                            </span>
                            <Link to="/rules"
                                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-white/40 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:-translate-y-1">
                                View Rules
                            </Link>
                        </div>
                        <CountdownTimer />
                    </div>
                </motion.div>

                {/* Quick Stats Row */}
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] text-center">
                        <div className="text-2xl font-bold text-amber-400 mb-2">₹4.3L+</div>
                        <p className="text-sm text-white/70">Total Rewards</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] text-center">
                        <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                        <p className="text-sm text-white/70">Top 3 Teams<br />Main Prizes</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] text-center">
                        <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="text-sm text-white/70">Individual Awards<br />Extra Recognition</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] text-center">
                        <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-sm text-white/70">Global Sponsors<br />Backing TRIADA</p>
                    </motion.div>
                </motion.div>

                {/* Top 3 Prize Cards */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <h2 className="text-white text-3xl md:text-4xl mb-10 text-center">Top 3 Team Prizes</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* 1st Place - Larger */}
                        <div className="lg:col-span-1 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-8 rounded-[2rem] hover:bg-amber-500/10 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
                                <Trophy className="w-16 h-16 text-amber-400" />
                            </div>
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 text-amber-400 text-sm font-mono mb-4">
                                    1st Place Team
                                </div>
                                <div className="text-2xl font-bold text-amber-400">Worth ₹1,58,547+</div>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">₹10,000 Cash</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">2× HackerDNA Pro Memberships</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">2× OffSec Proving Grounds Practice Subscriptions</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">2× kWAPTA Exam Vouchers</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">2× 1-Year .xyz Domains</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">BCSA + 2 Years of Pwndora Access</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /> <span><strong className="text-white">2× ACP Vouchers</strong></span></li>
                            </ul>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OtterSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">HackerDNA</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OffSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">KnightSquad</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">BlackPerl</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">APIsec University</span>
                            </div>
                        </div>

                        {/* 2nd Place */}
                        <div className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-400/10 text-gray-300 text-sm font-mono mb-4">
                                    2nd Place Team
                                </div>
                                <div className="text-xl font-bold text-gray-300">Worth ₹1,31,647+</div>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">₹6,000 Cash</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× OffSec Proving Grounds Practice Subscriptions</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× kWAPTA Exam Vouchers</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× 1-Year .xyz Domains</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">BCSA + 1 Year of Pwndora Access</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× CASA Vouchers</strong></span></li>
                            </ul>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OtterSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OffSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">KnightSquad</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">BlackPerl</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">APIsec University</span>
                            </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem] hover:bg-white/[0.04] transition-colors">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/10 text-amber-600 text-sm font-mono mb-4">
                                    3rd Place Team
                                </div>
                                <div className="text-xl font-bold text-amber-600">Worth ₹85,400+</div>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">₹4,000 Cash</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× OffSec Proving Grounds Practice Subscriptions</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× kWAPTA Exam Voucher</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× 1-Year .xyz Domains</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">1 Year of Pwndora Access</strong></span></li>
                                <li className="flex gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong className="text-white/90">2× APU+ Vouchers</strong></span></li>
                            </ul>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OtterSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">OffSec</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">KnightSquad</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">BlackPerl</span>
                                <span className="px-2 py-1 bg-white/10 text-xs text-white/60 rounded-full">APIsec University</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Rewards */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <h2 className="text-white text-2xl md:text-3xl mb-8 text-center">More Rewards Beyond the Podium</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                            <Users className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-lg font-medium text-white mb-2">Top 3 Individuals</h3>
                            <p className="text-sm text-white/70">Hackviser VIP memberships for standout individual performers</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                            <Award className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-lg font-medium text-white mb-2">APIsec University Giveaways</h3>
                            <p className="text-sm text-white/70">Certification vouchers and learning resources distributed during the event</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/[0.07] p-6 rounded-[1.5rem]">
                            <Trophy className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-medium text-white mb-2">Certificates & Recognition</h3>
                            <p className="text-sm text-white/70">Special recognition for finalists and standout participants</p>
                        </div>
                    </div>
                </motion.div>

                {/* Sponsor-Powered Section */}
                <motion.div variants={fadeInUp} className="text-center">
                    <h2 className="text-white text-2xl md:text-3xl mb-8">Powered by Leading Security Brands</h2>

                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <img src="sponsor_logos/ottersec.png" alt="OtterSec" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/lorikeet.png" alt="Lorikeet Sec" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/black_perl.png" alt="BlackPerl" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/offsec.svg" alt="OffSec" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/hackviser.svg" alt="Hackviser" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/knightsquad.png" alt="KnightSquad" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/xyz-logo-white_1.png" alt="XYZ" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/hackerdna.png" alt="HackerDNA" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                        <img src="sponsor_logos/apisec.png" alt="APIsec University" className="h-12 w-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-sm text-white/60 max-w-3xl mx-auto leading-relaxed">
                        From cash prizes to premium training, certifications, and domains — our sponsors are helping make TRIADA CTF '26 one of the most rewarding student cybersecurity events in the country.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}