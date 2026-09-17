"use client"

import { Banner } from '@/components/Navigation';
import { useBannerStore } from '@/store/banner'

export default function BannerContainer() {

    const banner = useBannerStore((state) => state);
    
    return banner.isOpen && <Banner />;
};