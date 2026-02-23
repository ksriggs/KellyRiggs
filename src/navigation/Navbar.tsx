"use client"

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useThemeStore } from '@/store/theme';
import { useScrollPosition } from '@/hooks';

import { FaBars } from 'react-icons/fa6';
import { ThemeChanger } from '@/components/ThemeChanger';
import { Image } from '@/components/common';
import MobileNavbar from './MobileNavbar';

// import { IMAGE_RESOURCES } from '@repo/ui';
import _Routes from './_Routes';

function Navbar() {

    const currentPathname = usePathname();
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);
    const scrollPosition = useScrollPosition();

    const [solidBackground, setSolidBackground] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const solidPos = {
            home: 550,
            other: 400
        };

        if(isMobileOpen) {
            return;
        }

        if(currentPathname === "/") {
            if(scrollPosition > solidPos.home) {
                setSolidBackground(true);
            }

            if(scrollPosition < solidPos.home) {
                setSolidBackground(false);
            }
        }
        else {
            if(scrollPosition > solidPos.other) {
                setSolidBackground(true);
            }

            if(scrollPosition < solidPos.other) {
                setSolidBackground(false);
            }
        }
    }, [scrollPosition, currentPathname, isMobileOpen]);

    useEffect(() => {
        setSolidBackground(isMobileOpen);
    }, [isMobileOpen]);

    const renderRoutes = () => {
        return _Routes.map((route, index) => {
            const isActiveLink = currentPathname.split("/")[1] === route.pathname.split("/")[1];

            return(
                <Link 
                    href={route.pathname}
                    key={`navbar-route-${route.title}-${index}`} 
                    className={`
                        hover:bg-primary hover:cursor-pointer min-w-10 rounded-md text-center py-1 px-2.5 duration-300
                        ${isActiveLink && " bg-primary"}
                    `}
                >
                    <p className="font-semibold">
                        {route.title}
                    </p>
                </Link>
            );
        });
    };

    return(
        <div className="w-full fixed z-50">
            <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                {
                    solidBackground &&
                    <motion.div 
                        className="fixed w-[140vw] top-0 left-0"
                        initial={{ skewX: -50, x: "120vw" }}
                        animate={{ 
                            skewX: 0, 
                            x: "-20vw",
                            transition: { duration: .3 } 
                        }}
                        exit={{
                            skewX: 50,
                            x: "120vw",
                            transition: { duration: .3 }
                        }}
                    >
                        <div className="h-full w-full bg-background absolute py-11 z-40" />
                    </motion.div>
                }
                </AnimatePresence>
                <div className="grid grid-cols-2 lg:grid-cols-3 content-center py-4 z-10 w-11/12">
                    <Link href="/" className="flex justify-start items-center gap-1">
                        <Image className="relative! w-10! mr-1 rounded-md" fill src={"https://cdn.imgchest.com/files/30db973c038e.png"} alt="logo" />
                        <h1 className="font-bold text-lg">Kelly Riggs</h1>
                    </Link>
                    <div className="col-span-1 flex-1 hidden lg:flex gap-2 items-center justify-center">
                        {renderRoutes()}
                    </div>
                    <div className="hidden lg:flex items-center justify-end gap-5">
                        <ThemeChanger currentTheme={theme} setTheme={setTheme} />
                    </div>
                    <div className="flex items-center justify-end lg:hidden">
                        <div className="ml-4 mr-4 flex lg:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <FaBars className="text-2xl text-text" />
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence key="navbar-ap" mode="wait">
                {
                    isMobileOpen && 
                    <MobileNavbar 
                        isOpen={isMobileOpen} 
                        setIsOpen={setIsMobileOpen}
                    />
                }
            </AnimatePresence>
        </div>
    );
};

export default Navbar;