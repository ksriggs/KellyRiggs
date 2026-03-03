import type { YouTubeFeedEntry } from '@/types/youtubeFeed';

import dayjs from 'dayjs';

import { YouTubePlayer } from '@/components/common';
import { FaRegCalendar } from 'react-icons/fa6';

interface PodcastEpisodeProps {
    episode: YouTubeFeedEntry
};

function PodcastEpisode({ episode }: PodcastEpisodeProps) {

    const videoId = episode.id.split(":")[2];

    return(
        <div className="bg-card-light rounded-lg w-full lg:h-126">
            <div className="flex flex-col gap-8 h-full">
                <div className="rounded-t-lg overflow-hidden h-4/6">
                    <YouTubePlayer videoId={videoId} />
                </div>
                <div className="px-2 flex flex-col gap-4 h-2/6 pb-4">
                    <h1 className="text-text font-semibold text-lg">{episode.title}</h1>
                    <div className="flex gap-2 items-end flex-1">
                        <FaRegCalendar className="text-secondary" />
                        <p className="text-accent font-semibold">
                            {dayjs(episode.published).format("MMMM D, YYYY")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastEpisode;