import { Forbes } from '@/components/common';

function ForbesCoachesCouncil() {

    const forbesColor = "#193b72";

    return(
        <div className="flex items-center overflow-hidden rounded-lg">
            <div className="bg-text flex items-center gap-3 lg:gap-5 px-5 h-25">
                <div>
                    <Forbes fill={forbesColor} height={50} width={140} />
                </div>
                <div
                    className="h-15 w-0.5" 
                    style={{ backgroundColor: forbesColor }}
                />
                <div
                    className="text-lg lg:text-xl leading-6"
                    style={{ color: forbesColor }}
                >
                    <p>Coaches <br /> Council</p>
                </div>
            </div>
            <div 
                className="flex flex-col items-center justify-center font-bold uppercase text-center h-25 gap-2 px-5"
                style={{ backgroundColor: forbesColor }}
            >
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-md">2023</p>
                </div>
                <p className="font-sans tracking-wider text-xs lg:text-md">Official Member</p>
            </div>
        </div>
    );
};

export default ForbesCoachesCouncil;