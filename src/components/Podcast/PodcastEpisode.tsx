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
        <div className="bg-card-light rounded-lg h-120 flex-1">
            <div className="flex flex-col gap-8">
                <div className="rounded-t-lg overflow-hidden">
                    <YouTubePlayer videoId={videoId} />
                </div>
                <div className="px-2 flex flex-col gap-4 layout aspect-video">
                    <h1 className="text-text font-semibold text-lg">{episode.title}</h1>
                    <div className="flex gap-2 items-center">
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