"use client"

import { ClientOnly, FloatingLines } from '@/components/common';
import JumbotronContent from './JumbotronContent';
import { useThemeStore } from '@/store/theme';

function Jumbotron() {

    const theme = useThemeStore((state) => state.theme);

    return(
        <div className="w-full h-screen relative">
            <div className="fixed w-full h-screen bg-card/50">
            <ClientOnly>
                <FloatingLines
                    linesGradient={[theme.colors.primary, theme.colors.background, theme.colors.background, theme.colors.accent]}
                    enabledWaves={["middle"]}
                    // Array - specify line count per wave; Number - same count for all waves
                    lineCount={[10, 15, 20]}
                    // Array - specify line distance per wave; Number - same distance for all waves
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </ClientOnly>
            </div>
            <div className="fixed top-0 bottom-0 right-0 left-0 w-full bg-background/50">
                <JumbotronContent />
            </div>
            <div className="absolute h-30 w-[200%] bg-background -bottom-10 blur-xl z-20" />
            <div className="absolute h-30 w-[200%] bg-background -bottom-20 blur z-20" />
        </div>
    );
};

export default Jumbotron;