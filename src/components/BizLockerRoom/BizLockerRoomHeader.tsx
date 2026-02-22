import type { IconType } from 'react-icons';

import { MotionHover } from '@/components/common';

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
                <h1 className="font-bold text-6xl text-center">Business Locker Room</h1>
                <p className="font-semibold text-3xl text-center text-muted">
                    Game-Changing Sales and Leadership Strategies
                </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
                {renderServices()}
            </div>
        </div>
    );
};

export default BizLockerRoomHeader;