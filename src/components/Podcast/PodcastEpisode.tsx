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
        <div className="bg-card-light rounded-lg w-full h-90 lg:h-100">
            <div className="flex flex-col gap-2 h-full">
                <div className="">
                    <div className="rounded-t-lg overflow-hidden object-scale-down">
                        <YouTubePlayer videoId={videoId} />
                    </div>
                </div>
                <div className="px-2 flex flex-col h-full pb-4">
                    <h1 className="text-text font-semibold text-lg flex-1">{episode.title}</h1>
                    <div className="flex gap-2 items-end">
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