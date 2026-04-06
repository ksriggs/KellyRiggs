"use client"

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { motion } from 'motion/react';

import KeynoteCardDetails from './KeynoteCardDetails';
import KeynoteCardInfo from './KeynoteCardInfo';

import { useWindowDimensions } from '@/hooks';
import { BREAKPOINTS } from '@/constants';

export interface KeynoteCardProps {
    title: string,
    subtitle?: string,
    timeNeeded: string,
    audience: string[],
    description: React.ReactNode,
    direction?: "left" | "right"
};

function KeynoteCard({ title, subtitle, timeNeeded, audience, description, direction="left" }: KeynoteCardProps) {

    const dimensions = useWindowDimensions();
    const DirectionIcon = direction === "left" && dimensions.width >= BREAKPOINTS.LG ? FaArrowLeft : FaArrowRight;

    const renderDetails = () => (
        <KeynoteCardDetails title={title} subtitle={subtitle} description={description} />
    );

    const renderInfo = () => (
        <KeynoteCardInfo direction={direction} timeNeeded={timeNeeded} audience={audience} />
    );

    return(
        <motion.div 
            key={`keynote-${title}`}
            className="flex flex-col lg:flex-row gap-5 items-center"
            initial={{ x: direction === "left" ? "20dvw" : "-20dvw" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .1, stiffness: 80, type: "spring" }}
        >
            {direction === "left" || dimensions.width < BREAKPOINTS.LG ? renderDetails() : renderInfo()}
            {dimensions.width >= BREAKPOINTS.LG && <DirectionIcon className="text-4xl" />}
            {direction === "left" || dimensions.width < BREAKPOINTS.LG ? renderInfo() : renderDetails()}
        </motion.div>
    );
};

export default KeynoteCard;