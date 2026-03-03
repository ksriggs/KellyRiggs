import { FaClock, FaUsers } from 'react-icons/fa6';

interface KeynoteCardInfoProps {
    timeNeeded: string,
    audience: string[]
};

function KeynoteCardInfo({ timeNeeded, audience }: KeynoteCardInfoProps) {

    return(
        <div className="flex-1 text-text pt-6 relative w-full">
            <div className="flex flex-col items-center justify-center text-center gap-5">
                <div className="flex flex-col items-center justify-center gap-4 bg-card-light flex-1 w-full py-6 rounded-lg">
                    <FaClock className="text-5xl text-accent" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-xl text-accent">Time Needed:</p>
                        <p className="font-semibold">{timeNeeded}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 bg-card-light flex-1 w-full py-6 rounded-lg">
                    <FaUsers className="text-5xl text-accent" />
                    <div className="flex flex-col gap-3 px-4">
                        <p className="font-bold text-xl text-accent">Audience:</p>
                        <p className="font-semibold">{audience.join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeynoteCardInfo;