import type { IconType } from 'react-icons';

import { MotionHover, SectionSubtitle, SectionTitle } from '@/components/common';

import { GiMicrophone } from "react-icons/gi";
import { FaDumbbell, FaLightbulb } from "react-icons/fa6";

function BizLockerRoomHeader() {

    const services: { title: string, icon?: IconType }[] = [
        { title: "Speaking", icon: GiMicrophone },
        { title: "Training", icon: FaDumbbell },
        { title: "Coaching", icon: FaLightbulb },
        { title: "CounterMentors™" }
    ];

    const renderServices = () => {
        return services.map((item, index) => (
            <div key={`blr-services-${index}`}>
                <MotionHover>
                    <button className="w-40 h-12 flex items-center justify-center gap-2 bg-primary rounded-xl hover:cursor-pointer">
                        {item.icon && <item.icon className="text-xl" />}
                        <p className="font-semibold">{item.title}</p>
                    </button>
                </MotionHover>
            </div>
        ));
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