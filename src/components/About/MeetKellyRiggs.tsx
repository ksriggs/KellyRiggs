import { Image, SocialsBar } from '@/components/common';
import { Button } from '@/components/ui/button';

interface MeetKellyRiggsProps {
    content: string
};

function MeetKellyRiggs({ content }: MeetKellyRiggsProps) {

    return(
        <div className="bg-card w-full flex flex-col lg:flex-row items-center rounded-lg">
            <div className="p-6 flex flex-col gap-10">
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <h1 className="text-4xl font-bold">
                        Meet Kelly Riggs
                    </h1>
                    <p className="font-semibold text-muted w-full lg:w-10/12">
                        {content}
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 text-4xl text-muted justify-center lg:justify-start">
                        <SocialsBar
                            whitelist={[
                                "LinkedIn",
                                "Spotify",
                                "YouTube",
                                "Apple Podcasts"
                            ]}
                        />
                    </div>
                </div>
                <div className="relative max-w-max">
                    <Button size="xl">
                        Book A Call
                    </Button>
                </div>
            </div>
            <div className="p-6 flex items-center justify-center">
                <div className="rounded-lg overflow-hidden">
                    <Image src={`https://kellyriggs.com/wp-content/uploads/2020/04/Kelly-Riggs-Images-0169_Crop_sm.jpeg`} alt="Kelly Riggs" />
                </div>
            </div>
        </div>
    );
};

export default MeetKellyRiggs;