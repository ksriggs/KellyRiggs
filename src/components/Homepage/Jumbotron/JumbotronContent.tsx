import { Image, RotatingText, SocialsBar } from '@/components/common';
import { Button } from '@/components/ui/button';

function JumbotronContent() {

    return(
        <div className="flex flex-col lg:flex-row gap-0 md:gap-0 items-center justify-center h-screen px-10 lg:px-30 xl:px-56">
            <div className="flex flex-col gap-2 justify-center items-center lg:items-start text-center lg:text-start w-full z-20">
                <div className="w-full lg:w-7/12 flex flex-col gap-3">
                    <h1 className="text-6xl lg:text-7xl font-bold text-accent">Kelly Riggs</h1>
                    <div className="text-3xl lg:text-5xl font-bold text-text w-full lg:w-8/12 mt-4">
                        <RotatingText
                            texts={["Innovative Sales", "Leadership Strategies", "Podcast Host", "Keynote Speaker", "Author"]}
                            mainClassName={`
                                px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg
                                bg-gradient-to-r from-card-light via-primary to-accent
                            `}
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </div>
                    <div className="flex gap-5 text-4xl mt-5 text-muted justify-center lg:justify-start">
                        <SocialsBar
                            whitelist={[
                                "LinkedIn",
                                "X",
                                "Facebook",
                                "YouTube",
                                "Spotify",
                            ]}
                        />
                    </div>
                    <Button size="lg" className="text-xl py-7 mt-5">
                        Book A Call!
                    </Button>
                </div>
            </div>
            <div className="md:flex-1 flex items-center justify-center absolute -bottom-10 right-0 z-10">
                <div className="hidden md:flex md:w-80 md:h-80 lg:w-100 lg:h-100 xl:w-180 xl:h-180 overflow-hidden">
                    <Image 
                        width={800} 
                        height={800} 
                        className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                        src={"https://cdn.imgchest.com/files/26fec739c6bb.png"}
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default JumbotronContent;