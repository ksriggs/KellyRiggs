"use client"

import type { IconType } from 'react-icons';

import Link from 'next/link';
import { FaDumbbell, FaLightbulb } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";

import { Image, MotionHover, SectionSubtitle } from '@/components/common';
import BizLockerRoomSummary from './BizLockerRoomSummary';

interface ServiceItem {
    title: string,
    icon?: IconType,
    to: string,
    internal: boolean
};

function BizLockerRoomHeader() {

    const services: ServiceItem[] = [
        { title: "Speaking", icon: GiMicrophone, to: "/bizlockerroom/speaking", internal: true },
        { title: "Training", icon: FaDumbbell, to: "/bizlockerroom/coaching", internal: true },
        { title: "Coaching", icon: FaLightbulb, to: "/bizlockerroom/coaching", internal: true }
    ];

    const renderButton = (title: string, Icon?: IconType) => (
        <button className="w-40 h-12 flex items-center justify-center gap-2 bg-primary rounded-xl hover:cursor-pointer">
            {Icon && <Icon className="text-xl" />}
            <p className="font-semibold">{title}</p>
        </button>
    );

    const renderServices = () => {
        return services.map((item, index) => {
            return(
                <div key={`blr-services-${index}`}>
                    <MotionHover>
                        {
                            item.internal ? 
                            <Link href={item.to}>
                                {renderButton(item.title, item.icon)}
                            </Link>
                            :
                            <a href={item.to} target="_blank" rel="noopener noreferrer">
                                {renderButton(item.title, item.icon)}
                            </a>
                        }
                    </MotionHover>
                </div>
            );
        });
    };

    return(
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-100 h-15 lg:w-200 lg:h-28 flex overflow-hidden relative left-0 lg:-left-8">
                    <Image 
                        className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                        src="http://api.kellyriggs.com/wp-content/uploads/2026/05/BizLogoWhite.png" 
                        alt={"Biz Locker Room Logo"}
                    />
                </div>
                <SectionSubtitle className="text-3xl">
                    Game-Changing Sales and Leadership Strategies
                </SectionSubtitle>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
                    {renderServices()}
                </div>
                <BizLockerRoomSummary />
            </div>
        </div>
    );
};

export default BizLockerRoomHeader;