import type { IconType } from 'react-icons';

import { FaChartLine, FaScaleBalanced } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import MyPromiseItem from './MyPromiseItem';
import { MotionFadeIn, SectionSubtitle, SectionTitle } from '@/components/common';

interface PromiseItem {
    title: string,
    icon: IconType,
    description: string
};

const promiseItems: PromiseItem[] = [
    { 
        title: "Leadership",
        icon: FaScaleBalanced,
        description: `
            Effective leaders are rare. According to research, roughly 1-in-7 managers are 
            considered by their employees to be effective leaders. However, there is a special 
            subset of managers with a specific combination of skills who are considered to be 
            great leaders 74% of the time! Unfortunately, less than 1% of managers have the 
            critical skills sets that make for great leadership! To be a great leader, you 
            simply need to learn a specific set of skills that are rarely taught. 
            I will teach you those skills.
        `
    },
    {
        title: "Sales",
        icon: FaChartLine,
        description: `
            The Top 7% of salespeople are different than the other 93%. They do things differently, 
            of course, but, more importantly, they think differently. To reach the summit of 
            the selling profession requires a critical shift in mindset: how you approach your 
            profession, how you approach customers, and how you approach each and every day. It also 
            requires a specific set of skills that enable the Top 7% of salespeople to overcome, 
            adapt, and consistently win where others don't. I will teach you those skills.
        `
    }
];

function MyPromises() {

    const renderPromiseItems = () => {
        return promiseItems.map((item, index) => (
            <MyPromiseItem 
                key={`promise-items-${index}`}
                title={item.title}
                icon={item.icon}
                description={item.description}
            />
        ));
    };

    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <MotionFadeIn>
                <div className="text-center flex flex-col gap-3">
                    <SectionTitle>
                        My <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Promises</span> To You
                    </SectionTitle>
                    <SectionSubtitle>No hype. No magic bullets. Just real results. NOW.</SectionSubtitle>
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-8 justify-center items-center flex-wrap">
                    {renderPromiseItems()}
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex flex-row justify-center items-center gap-5">
                    <p className="font-semibold">Ready to learn more?</p>
                    <Button size="lg" className="text-lg">
                        Get Started
                    </Button>
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default MyPromises;