import type { YouTubeFeed, YouTubeFeedEntry } from '@/types/youtubeFeed';

import { FaArrowRightLong, FaMicrophoneLines } from 'react-icons/fa6';
import { MotionFadeIn, SectionSubtitle, SectionTitle } from '@/components/common';
import { Button } from '@/components/ui/button';
import PodcastEpisode from './PodcastEpisode';

import { SOCIAL_LINKS } from '@/constants';

interface RecentPodcastListProps {
    feed: YouTubeFeed,
    hideHeader?: boolean
};

function RecentPodcastList({ feed, hideHeader }: RecentPodcastListProps) {

    const renderVideos = (feed: YouTubeFeed) => {

        const entries: YouTubeFeedEntry[] = [];

        for(let i = 0; i < feed.entry.length; i++) {
            const current = feed.entry[i];
            
            if(!current.title.split(" ").includes("#shorts")) {
                entries.push(current);
            }

            if(entries.length >= 3) {
                break;
            }
        }

        return entries.map((item) => (
            <PodcastEpisode key={`podcast-episode-${item?.id}`} episode={item} />
        ));
    };

    return(
        <div className="flex flex-col justify-center items-center gap-20">
            {
                !hideHeader && 
                (
                    <MotionFadeIn>            
                    <div className="flex flex-col gap-3 items-center justify-center text-center">
                        <FaMicrophoneLines className="text-7xl mb-4" />
                        <SectionTitle>
                            The Sales <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">[UN]</span>Training Podcast
                        </SectionTitle>
                        <SectionSubtitle>Take a look at some of the recent episodes!</SectionSubtitle>
                    </div>
                    </MotionFadeIn>
                )
            }                
            <MotionFadeIn>
                <div className="flex flex-col lg:flex-row gap-5 w-full items-center justify-center">
                    {renderVideos(feed)}
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <p className="font-semibold text-lg">Want to see more?</p>
                    <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
                        <Button>
                            Check Out The Full Channel
                            <FaArrowRightLong />
                        </Button>
                    </a>
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default RecentPodcastList;