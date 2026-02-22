import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import MotionHover from '../motion/MotionHover';

interface CarouselControlProps {
    maxItems: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
};

function CarouselControls({ maxItems, setIndex }: CarouselControlProps) {

    const nextStep = () => setIndex((prev) => (prev + 1) % maxItems);
    const prevStep = () => setIndex((prev) => (prev - 1 + maxItems) % maxItems);

    return(
        <div className="absolute top-2/4 w-full flex items-center justify-center z-30">
            <MotionHover className="absolute -left-20">
                <button onClick={prevStep} className="hover:cursor-pointer px-4 py-4 bg-primary/40 rounded-full shadow-md">
                    <FaChevronLeft />
                </button>
            </MotionHover>
            <MotionHover className="absolute -right-20">
                <button onClick={nextStep} className="hover:cursor-pointer px-4 py-4 bg-primary/40 rounded-full shadow-md">
                    <FaChevronRight />
                </button>
            </MotionHover>
        </div>
    );
};

export default CarouselControls;