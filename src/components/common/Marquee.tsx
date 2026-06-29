"use client"

import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { motion, animate } from 'motion/react';

interface MarqueeProps {
    gapBetween?: number,
    speed?: number
};

function Marquee({ children, gapBetween=0, speed=20 }: PropsWithChildren<MarqueeProps>) {
    const marqueeRef = useRef<HTMLDivElement | null>(null);
    const duplicateChildren = new Array(3).fill(children);

    useEffect(() => {
        const element = marqueeRef.current;
        if (!element) return;

        // Use the imperative animate function
        const controls = animate(element, { x: [0, -(element.scrollWidth / 3)] }, {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: speed,
        });

        return () => controls.stop();
    }, [speed]);

    return(
        <div className="overflow-hidden">
            <motion.div
                ref={marqueeRef}
                className="flex z-20"
            >
                {duplicateChildren.map((child, index) => (
                    <div 
                        key={index} 
                        className="shrink-0" 
                        style={{ padding: `0 calc(var(--spacing) * ${gapBetween / 2})` }}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;