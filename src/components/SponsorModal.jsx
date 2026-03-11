import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function SponsorModal({ sponsor, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    if (!sponsor) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={onClose}
                style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            >
                {/* Modal card */}
                <motion.div
                    key="card"
                    className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0e0e0e] p-8 shadow-2xl"
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {/* Tier badge */}
                    <span
                        className="inline-block mb-6 px-3 py-1 text-[10px] tracking-[0.22em] uppercase rounded-full border font-medium"
                        style={{ color: sponsor.tierColor, borderColor: `${sponsor.tierColor}40`, background: `${sponsor.tierColor}0d` }}
                    >
                        {sponsor.tier}
                    </span>

                    {/* Logo */}
                    <div className="mb-6">
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-h-14 w-auto object-contain"
                            style={{ filter: sponsor.invertLogo ? 'invert(1) brightness(1.2)' : undefined }}
                        />
                    </div>

                    {/* Company name */}
                    <h3 className="text-white text-xl font-semibold mb-2">{sponsor.name}</h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed mb-7">{sponsor.description}</p>

                    {/* Website CTA */}
                    <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-white/90 text-black text-xs font-medium tracking-[0.1em] uppercase rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-4px_rgba(255,255,255,0.25)]"
                    >
                        Visit Website <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
