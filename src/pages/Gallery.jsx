import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

import img1 from '../assets/20260406_094219.jpg';
import img2 from '../assets/20260406_095558.jpg';
import img3 from '../assets/20260406_095604.jpg';
import img4 from '../assets/20260406_110003.jpg';
import img5 from '../assets/20260406_110649.jpg';
import img6 from '../assets/20260406_133703.jpg';
import img7 from '../assets/20260406_134438.jpg';
import img8 from '../assets/20260406_140007.jpg';
import img9 from '../assets/20260406_140136.jpg';
import img10 from '../assets/20260406_182745.jpg';
import img11 from '../assets/20260406_183936.jpg';
import img12 from '../assets/20260406_184404.jpg';
import img13 from '../assets/20260406_184717.jpg';
import img14 from '../assets/IMG_20260406_074529.jpg';

const PHOTOS = [
    img14, img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10, img11,
    img12, img13,
];

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

export default function Gallery() {
    useEffect(() => { document.title = "Gallery — TRIADA CTF '26"; }, []);

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
    const next = () => setLightboxIndex((i) => (i + 1) % PHOTOS.length);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxIndex]);

    // Lock scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    return (
        <section className="py-10 px-5 md:px-10 max-w-7xl mx-auto min-h-screen">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                {/* Header */}
                <motion.div variants={fadeInUp} className="text-center mb-14">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Triada CTF '26 · 6 April 2026</p>
                    <h1 className="text-white text-4xl md:text-5xl mb-4">
                        Event <span className="text-red-500" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Gallery</span>
                    </h1>
                    <p className="text-white/50 text-sm max-w-md mx-auto font-light leading-relaxed">
                        Moments captured from the biggest offline CTF of 2026.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    variants={staggerContainer}
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
                >
                    {PHOTOS.map((src, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07]"
                            onClick={() => openLightbox(i)}
                        >
                            <img
                                src={src}
                                alt={`Triada CTF '26 — Photo ${i + 1}`}
                                loading="lazy"
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={fadeInUp} className="text-center text-white/20 text-xs mt-10 tracking-widest uppercase">
                    {PHOTOS.length} photos · Triada CTF 2026
                </motion.p>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors z-10"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-4 p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors z-10"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={lightboxIndex}
                            src={PHOTOS[lightboxIndex]}
                            alt={`Photo ${lightboxIndex + 1}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="max-h-[88vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-4 p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors z-10"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Counter */}
                        <p className="absolute bottom-5 text-white/40 text-xs tracking-widest">
                            {lightboxIndex + 1} / {PHOTOS.length}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
