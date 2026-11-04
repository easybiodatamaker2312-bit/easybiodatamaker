'use client';

import { type MouseEvent, type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Heart, Sparkles, WandSparkles } from 'lucide-react';

export function HeroMotion({ children }: { children: ReactNode }) {
  const bounds = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 22 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !bounds.current) return;
    const rect = bounds.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <div ref={bounds} onMouseMove={handleMove} onMouseLeave={reset} className="hero-motion-scene relative mx-auto w-full max-w-[560px] lg:justify-self-end">
      <div className="hero-aura hero-aura-one" aria-hidden="true" />
      <div className="hero-aura hero-aura-two" aria-hidden="true" />
      <motion.div
        className="hero-document-stage relative z-10 mx-auto w-[73%] sm:w-[67%]"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={reduceMotion ? undefined : { y: [0, -11, 0], rotateZ: [0, .6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="hero-document-shadow" aria-hidden="true" />
        {children}
      </motion.div>

      <motion.div className="hero-float-chip hero-chip-left" animate={reduceMotion ? undefined : { y: [0, -9, 0], rotate: [-3, -1, -3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="hero-chip-icon"><WandSparkles size={16} /></span><span><strong>Made with love</strong><small>Beautifully personal</small></span>
      </motion.div>
      <motion.div className="hero-float-chip hero-chip-right" animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [2, 4, 2] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: .5 }}>
        <span className="hero-chip-icon hero-chip-heart"><Heart size={16} fill="currentColor" /></span><span><strong>Your story</strong><small>One lovely page at a time</small></span>
      </motion.div>
      <motion.div className="hero-sparkle hero-sparkle-one" animate={reduceMotion ? undefined : { rotate: 360, scale: [1, 1.18, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}><Sparkles size={22} /></motion.div>
      <motion.div className="hero-sparkle hero-sparkle-two" animate={reduceMotion ? undefined : { rotate: -360, scale: [1, .8, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}><Sparkles size={15} /></motion.div>
    </div>
  );
}
