import { MotionFadeIn, SectionTitle } from '@/components/common';

import { Focus, Leadership, Revenue } from './ProfitKillers';

function ThreeProfitKillers() {

    const delay = 0.1;

    return(
        <div className="flex flex-col items-center justify-center gap-20">
            <MotionFadeIn>
                <SectionTitle>
                    3 <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Profit-Killing</span> Problems Facing Your Business
                </SectionTitle>
            </MotionFadeIn>            
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                <MotionFadeIn className="w-full md:w-[33%]" initialY="20dvh" fadeDelay={0 * delay} posYDelay={1 * delay}>
                    <Focus />
                </MotionFadeIn>
                <MotionFadeIn className="w-full md:w-[33%]" initialY="20dvh" fadeDelay={1 * delay} posYDelay={2 * delay}>
                    <Leadership />
                </MotionFadeIn>
                <MotionFadeIn className="w-full md:w-[33%]" initialY="20dvh" fadeDelay={2 * delay} posYDelay={3 * delay}>
                    <Revenue />
                </MotionFadeIn>
            </div>
        </div>
    );
};

export default ThreeProfitKillers;