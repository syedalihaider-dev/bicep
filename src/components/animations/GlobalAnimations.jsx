"use client"

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Respect prefers-reduced-motion accessibility settings
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Cleanup standard triggers on route change (but preserve pinned ones from specific components)
        ScrollTrigger.getAll().forEach(t => {
            if(!t.vars.pin && !t.vars.id?.includes('persistent')) {
                 t.kill();
            }
        });

        const ctx = gsap.context(() => {
            // Helper to check if element is safely animatable
            const isSafe = (el) => {
                return !el.closest('.swiper-wrapper') && !el.closest('header') && !el.closest('footer') && !el.classList.contains('no-anim');
            };

            // 1. Headings
            const headings = gsap.utils.toArray('section h1, section h2, section h3');
            headings.forEach(heading => {
                if (!isSafe(heading)) return;
                gsap.fromTo(heading, 
                    { opacity: 0, y: 40 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: heading,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // 2. Paragraphs
            const paragraphs = gsap.utils.toArray('section p');
            paragraphs.forEach(p => {
                if (!isSafe(p)) return;
                gsap.fromTo(p, 
                    { opacity: 0, y: 20 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: 'power2.out',
                        delay: 0.1, 
                        scrollTrigger: {
                            trigger: p,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // 3. Images (Scale + Fade)
            const images = gsap.utils.toArray('section img:not([alt*="logo"]):not([alt*="icon"]):not([class*="icon"])');
            images.forEach(img => {
                if (!isSafe(img) || img.closest('.iconWrapper') || img.closest('[class*="icon"]')) return;
                gsap.fromTo(img, 
                    { opacity: 0, scale: 1.05 },
                    { 
                        opacity: 1, 
                        scale: 1, 
                        duration: 1.2, 
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: img,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // 4. Cards Stagger (Bootstrap columns inside rows)
            const rows = gsap.utils.toArray('section .row');
            rows.forEach(row => {
                if (!isSafe(row)) return;
                const cols = row.querySelectorAll('[class*="col-"]');
                if (cols.length > 1) {
                    // Make sure these columns aren't already animated by themselves to avoid conflicts
                    const safeCols = Array.from(cols).filter(col => !col.classList.contains('no-anim'));
                    if (safeCols.length === 0) return;

                    gsap.fromTo(safeCols,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power2.out',
                            stagger: 0.15,
                            scrollTrigger: {
                                trigger: row,
                                start: 'top 85%',
                                toggleActions: 'play none none none'
                            }
                        }
                    );
                }
            });

            // 5. Buttons
            const buttons = gsap.utils.toArray('section button, section .btn, section a[class*="Btn"], section a[class*="btn"]');
            buttons.forEach(btn => {
                if (!isSafe(btn)) return;
                gsap.fromTo(btn,
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: btn,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

        });

        // Re-refresh ScrollTrigger after layout settles
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            clearTimeout(timeout);
            ctx.revert();
        };
    }, [pathname]);

    return null;
}
