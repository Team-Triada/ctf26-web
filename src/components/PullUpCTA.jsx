import React from 'react';
import { motion } from 'framer-motion';

export default function PullUpCTA() {
    return (
        <section className="px-4 md:px-10 pb-12 md:pb-16 pt-16 md:pt-24 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="pullup-card"
            >
                {/* Noise / grain overlay */}
                <div className="pullup-grain" aria-hidden="true" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40">
                        Ready to compete?
                    </p>

                    <h2 className="text-white whitespace-nowrap">
                        Pull Up to <span className="text-red-500">Triada</span> CTF '26
                    </h2>

                    <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-md">
                        24 hours. Real-world challenges. Two-member teams.
                        Prove your skills at the biggest offline CTF of 2026.
                    </p>


                </div>
            </motion.div>
        </section>
    );
}
