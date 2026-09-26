"use client"

import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';

import MarqueeMedia from './MarqueeMedia';

export interface MediaItem {
    id: string | number,
    url: string
};

interface MarqueeProps {
    items: MediaItem[],
    gapBetween?: number,
    speed?: number,
    itemWidth?: number,
    fill?: string
};

function Marquee({ items, gapBetween=0, speed=20, itemWidth, fill }: PropsWithChildren<MarqueeProps>) {

    const marquee = useRef<HTMLDivElement | null>(null);

    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const [marqueeSpeed] = useState(speed);

    const duplicateItems = useMemo(() => new Array(3).fill(items).flat(), [items]);

    useEffect(() => {
        if(!marquee.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const width = entry.target.scrollWidth;
            setMarqueeWidth((prev) => (prev !== width ? width : prev));
        });

        observer.observe(marquee.current);

        return () => observer.disconnect();
    }, []);

    const renderElements = () => {
        return duplicateItems.map((item, index) => (
            <div
                key={`${item.id}-${index}`}
                className="shrink-0"
                style={{ padding: `0 calc(var(--spacing) * ${gapBetween / 2})` }}
            >
                <MarqueeMedia url={item.url} width={itemWidth} fill={fill} />
            </div>
        ));
    };

    return(
        <motion.div className="overflow-hidden">
            <motion.div
                ref={marquee}
                animate={{
                    x: [0, -(marqueeWidth) / 3],
                    scale: 1,
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: marqueeSpeed,
                }}
                className={`flex z-20`}
            >
                <div className="flex w-fit gap-x-20 opacity-50 justify-center items-center">
                {renderElements()}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Marquee;