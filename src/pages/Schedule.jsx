import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Coffee, UtensilsCrossed, Gamepad2, Trophy, AlertTriangle, Info, IdCard, Sun, Moon } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const day1Events = [
    { time: '09:00 AM', title: 'Inauguration Ceremony, Registrations & Opening Formalities', icon: Calendar, color: 'red' },
    { time: '10:00 AM', title: 'CTF Competition Begins', icon: Trophy, color: 'amber' },
    { time: '11:30 AM', title: 'Tea Break', icon: Coffee, color: 'emerald' },
    { time: '01:00 PM', title: 'Lunch Break', icon: UtensilsCrossed, color: 'blue' },
    { time: '04:00 PM', title: 'Tea Break', icon: Coffee, color: 'emerald' },
    { time: '08:30 PM', title: 'Dinner', icon: UtensilsCrossed, color: 'purple' },
    { time: '12:00 AM', title: 'Games & Activities', subtitle: 'Esports, fun challenges, and informal sessions', icon: Gamepad2, color: 'pink' },
];

const day2Events = [
    { time: '07:30 AM', title: 'Breakfast', icon: UtensilsCrossed, color: 'orange' },
    { time: '10:00 AM', title: 'CTF Competition Ends', icon: Clock, color: 'red' },
    { time: '11:00 AM', title: 'Prize Distribution & Closing Ceremony', icon: Trophy, color: 'amber' },
];

const importantInfo = [
    { text: 'This is a continuous 24-hour event', icon: Clock },
    { text: 'Food and refreshments will be provided throughout', icon: UtensilsCrossed },
    { text: 'No sleeping arrangements will be provided', icon: Moon },
    { text: 'Participants must carry a valid college ID card', icon: IdCard },
    { text: 'Participants are advised to report on time for smooth registration', icon: Calendar },
];

const colorMap = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', dot: 'bg-red-500', glow: 'shadow-red-500/20' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', dot: 'bg-amber-500', glow: 'shadow-amber-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-500', glow: 'shadow-emerald-500/20' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', dot: 'bg-blue-500', glow: 'shadow-blue-500/20' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', dot: 'bg-purple-500', glow: 'shadow-purple-500/20' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400', dot: 'bg-pink-500', glow: 'shadow-pink-500/20' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', dot: 'bg-orange-500', glow: 'shadow-orange-500/20' },
};

function TimelineEvent({ event, index, isLast }) {
    const colors = colorMap[event.color];
    const Icon = event.icon;

    return (
        <motion.div variants={fadeInUp} className="flex gap-4 md:gap-6 relative">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${colors.dot} shadow-lg ${colors.glow} ring-2 ring-black/50 z-10 mt-1.5 flex-shrink-0`} />
                {!isLast && <div className="w-px flex-grow bg-gradient-to-b from-white/15 to-transparent min-h-[3rem]" />}
            </div>

            {/* Content */}
            <div className={`flex-grow pb-6 ${isLast ? '' : ''}`}>
                <div className={`bg-white/[0.02] border border-white/[0.07] rounded-[1.2rem] p-4 md:p-5 hover:bg-white/[0.04] transition-all duration-300 group`}>
                    <div className="flex items-start gap-3 md:gap-4">
                        <div className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <div className="flex-grow min-w-0">
                            <span className={`text-xs font-mono ${colors.text} tracking-wider`}>{event.time}</span>
                            <h3 className="text-white text-sm md:text-base font-medium mt-0.5 leading-snug">{event.title}</h3>
                            {event.subtitle && (
                                <p className="text-xs text-white/40 mt-1">{event.subtitle}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Schedule() {
    useEffect(() => { document.title = "Schedule — TRIADA CTF '26"; }, []);

    return (
        <section className="py-10 px-5 md:px-10 max-w-5xl mx-auto min-h-screen">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                {/* Header */}
                <motion.div variants={fadeInUp} className="text-center mb-14">
                    <h1 className="text-white mb-4 text-4xl md:text-5xl">
                        Event <span className="text-red-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Schedule</span>
                    </h1>
                    <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        A complete rundown of everything happening across the 24-hour TRIADA CTF '26 experience.
                    </p>
                </motion.div>

                {/* Day 1 */}
                <motion.div variants={fadeInUp} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <Sun className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-white text-xl md:text-2xl font-medium">Day 1</h2>
                            <p className="text-xs text-white/40 tracking-wider font-mono">6TH APRIL 2026</p>
                        </div>
                    </div>

                    <div className="ml-1">
                        {day1Events.map((event, i) => (
                            <TimelineEvent key={i} event={event} index={i} isLast={i === day1Events.length - 1} />
                        ))}
                    </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                            <Sun className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                            <h2 className="text-white text-xl md:text-2xl font-medium">Day 2</h2>
                            <p className="text-xs text-white/40 tracking-wider font-mono">7TH APRIL 2026</p>
                        </div>
                    </div>

                    <div className="ml-1">
                        {day2Events.map((event, i) => (
                            <TimelineEvent key={i} event={event} index={i} isLast={i === day2Events.length - 1} />
                        ))}
                    </div>
                </motion.div>

                {/* Important Information */}
                <motion.div variants={fadeInUp} className="mb-10">
                    <h2 className="text-white text-2xl md:text-3xl mb-6 text-center">Important Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
                        {importantInfo.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={i} variants={fadeInUp}
                                    className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.07] p-4 rounded-[1.2rem]">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-white/50" />
                                    </div>
                                    <p className="text-sm text-white/70">{item.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Notice */}
                <motion.div variants={fadeInUp} className="mb-8">
                    <div className="bg-red-500/5 border border-red-500/15 rounded-[1.5rem] p-5 max-w-3xl mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-red-400 mb-1">Notice</h4>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    Participants are expected to adhere to campus rules, including a strict no smoking and no alcohol policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Note */}
                <motion.div variants={fadeInUp} className="pb-8">
                    <div className="bg-white/[0.02] border border-white/[0.07] rounded-[1.5rem] p-5 max-w-3xl mx-auto">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Info className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-blue-400 mb-1">Note</h4>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    The schedule is subject to minor adjustments. Participants are advised to stay updated through official communication channels.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
