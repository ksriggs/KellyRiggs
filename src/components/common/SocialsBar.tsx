import type { IconType } from 'react-icons';

import React from 'react';
import { FaApple, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa6';

import MotionHover from './motion/MotionHover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { SOCIAL_LINKS } from '@/constants';

type Platform = (
    "LinkedIn" |
    "YouTube" |
    "Spotify" |
    "Apple Podcasts"
);

interface SocialMedia {
    title: Platform,
    url: string,
    icon: IconType
};

interface SocialsBarProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"],
    iconClass?: React.HTMLAttributes<HTMLDivElement>["className"],
    whitelist?: Platform[]
};

function SocialsBar({ className, iconClass, whitelist=[] }: SocialsBarProps) {

    const socials: SocialMedia[] = [
        { title: "LinkedIn", url: SOCIAL_LINKS.LINKEDIN, icon: FaLinkedin },
        { title: "Spotify", url: SOCIAL_LINKS.SPOTIFY, icon: FaSpotify },
        { title: "Apple Podcasts", url: SOCIAL_LINKS.APPLE_PODCASTS, icon: FaApple },
        { title: "YouTube", url: SOCIAL_LINKS.YOUTUBE, icon: FaYoutube }
    ];

    const renderSocials = () => {
        return socials.filter((item) => whitelist.includes(item.title)).map((item, index) => (
            <TooltipProvider
                key={`socials-bar-${item.title}-${index}`}
            >
                <Tooltip>
                    <TooltipTrigger className="hover:cursor-pointer">
                        <MotionHover>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <item.icon className={`hover:text-accent ${iconClass}`} />
                            </a>
                        </MotionHover>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="font-semibold">{item.title}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ));
    };

    return(
        <div className={`flex gap-5 text-4xl text-muted justify-center lg:justify-start ${className}`}>
            {renderSocials()}
        </div>
    );
};

export default SocialsBar;