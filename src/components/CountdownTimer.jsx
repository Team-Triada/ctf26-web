import React, { useState, useEffect } from 'react';

// Target: 6th April 2026, 09:00:00 AM IST (UTC+5:30)
const TARGET = new Date('2026-04-06T09:00:00+05:30').getTime();

function pad(n) {
    return String(n).padStart(2, '0');
}

export default function CountdownTimer({ className = '' }) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const diff = TARGET - Date.now();
        if (diff <= 0) return null;
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    if (!timeLeft) {
        return (
            <div className={`flex flex-col items-center gap-1 ${className}`}>
                <span className="text-xs tracking-[0.2em] uppercase text-green-400/80 font-medium">
                    Competition is live!
                </span>
            </div>
        );
    }

    const units = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Sec', value: timeLeft.seconds },
    ];

    return (
        <div className={`flex flex-col items-center gap-3 ${className}`}>
            <p className="text-xs tracking-[0.25em] uppercase text-white/40">
                Competition starts in
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
                {units.map(({ label, value }, i) => (
                    <React.Fragment key={label}>
                        <div className="flex flex-col items-center bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3 min-w-[64px] sm:min-w-[76px]">
                            <span
                                className="text-4xl sm:text-5xl font-mono font-bold text-white tabular-nums leading-none"
                            >
                                {pad(value)}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-white/35 mt-1.5">
                                {label}
                            </span>
                        </div>
                        {i < units.length - 1 && (
                            <span className="text-white/25 text-3xl font-light mb-4">:</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <p className="text-xs text-white/30 tracking-wide">
                6th Apr 2026 · 9:00 AM IST
            </p>
        </div>
    );
}
