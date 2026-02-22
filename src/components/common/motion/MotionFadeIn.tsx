"use client"

import type { HTMLMotionProps } from 'motion/react';

import React from 'react';
import { motion } from 'motion/react';

interface MotionFadeInProps extends HTMLMotionProps<"div"> {
    fadeDelay?: number,
    posYDelay?: number,
    initialY?: string
};

function MotionFadeIn({ fadeDelay=0, posYDelay=0, initialY="10dvh", children, ...rest }: React.PropsWithChildren<MotionFadeInProps>) {
    return(
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: fadeDelay, duration: .3 }}
            {...rest}
        >
            <motion.div
                className="w-full"
                initial={{ y: initialY }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: posYDelay, duration: .1, stiffness: 120, type: "spring" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default MotionFadeIn;