"use client"

import type { ThemeColors } from '@/types/theme';

import { BounceLoader } from 'react-spinners';

import { useThemeStore } from '@/store/theme';
import React from 'react';

interface SpinnerProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"],
    size?: number,
    color?: keyof ThemeColors
};

function Spinner({ className, size=15, color="primary" }: SpinnerProps) {

    const theme = useThemeStore((state) => state.theme);

    return(
        <BounceLoader
            className={`flex flex-1 items-center justify-center mt-10 ${className}`}
            size={size}
            color={theme.colors[color]}
        />
    );
};

export default Spinner;