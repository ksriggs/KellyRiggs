"use client"

import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useBannerStore } from '@/store/banner';
import { Button } from '../ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';

function Banner() {

    const banner = useBannerStore((state) => state);
    const spanClass = "font-extrabold";

    return(
        <div className="fixed flex items-center justify-center z-100 h-24 md:h-12 bg-card-light w-full shadow-lg">
            <div 
                className={`
                    flex items-center justify-center flex-wrap gap-1
                    text-center font-semibold text-md md:text-lg px-9 md:px-0
                `}
            >
                <p>New release from</p>
                <Link href="/about" className={spanClass + " hover:cursor-pointer hover:underline text-secondary"}>
                    Kelly Riggs
                </Link>
                <div />
                <Link href="/new/the-five-power-moves" className={spanClass + " hover:cursor-pointer hover:underline text-accent"}>
                    The Five Power Moves
                </Link>
                <Button size="sm">
                    Check it out
                    <FaArrowRightLong />
                </Button>
            </div>
            <button 
                className={`
                    flex items-center justify-center absolute right-4 md:right-6 duration-150 
                    hover:bg-primary hover:text-background rounded-full h-6 w-6 text-md
                `}
                onClick={() => banner.setOpen(false)}
            >
                <FaTimes className="" />
            </button>
        </div>
    );
};

export default Banner;