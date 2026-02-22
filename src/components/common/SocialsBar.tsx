import type { IconType } from 'react-icons';

import React from 'react';
import { FaApple, FaFacebook, FaLinkedin, FaSpotify, FaXTwitter, FaYoutube } from 'react-icons/fa6';

import MotionHover from './motion/MotionHover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Platform = (
    "LinkedIn" |
    "X" |
    "Facebook" |
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
        { title: "LinkedIn", url: "", icon: FaLinkedin },
        { title: "X", url: "", icon: FaXTwitter },
        { title: "Facebook", url: "", icon: FaFacebook },
        { title: "Spotify", url: "", icon: FaSpotify },
        { title: "Apple Podcasts", url: "", icon: FaApple },
        { title: "YouTube", url: "", icon: FaYoutube }
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