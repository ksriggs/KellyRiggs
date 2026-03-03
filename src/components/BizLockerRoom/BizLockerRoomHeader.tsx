import type { IconType } from 'react-icons';

import { MotionHover, SectionSubtitle, SectionTitle } from '@/components/common';

import { GiMicrophone } from "react-icons/gi";
import { FaDumbbell, FaLightbulb } from "react-icons/fa6";
import Link from 'next/link';

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
        { title: "Coaching", icon: FaLightbulb, to: "/bizlockerroom/coaching", internal: true },
        { title: "CounterMentors™", to: "https://countermentors.com/", internal: false }
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
        <div className="flex flex-col gap-15 items-center justify-center pt-20">
            <div className="flex flex-col items-center justify-center gap-4">
                <SectionTitle className="text-5xl">Business Locker Room</SectionTitle>
                <SectionSubtitle className="text-3xl">
                    Game-Changing Sales and Leadership Strategies
                </SectionSubtitle>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
                {renderServices()}
            </div>
        </div>
    );
};

export default BizLockerRoomHeader;