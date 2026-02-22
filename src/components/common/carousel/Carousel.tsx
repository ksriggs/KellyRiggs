"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';

interface CarouselProps {
  items: React.ReactNode[]
}

function Carousel({ items }: CarouselProps) {
    const [index, setIndex] = useState(0);

    return (
        <div className="relative">
            <div className="relative w-full mx-auto overflow-hidden rounded-xl p-4">
                <div className="relative w-full h-auto">
                    {/* 1. THE GHOST: This invisible div forces the parent to match the height of the largest item */}
                    <div className="invisible" aria-hidden="true">
                    {items[index]}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            // We use 'absolute inset-0' so it sits exactly on top of the ghost
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {items[index]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <CarouselControls maxItems={items.length} setIndex={setIndex} />
            <CarouselIndicators maxItems={items.length} currentIndex={index} />
        </div>
    );
};

export default Carousel;