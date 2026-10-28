import type { Metadata, Viewport } from 'next';

import { Layout } from '@/components/common';
import FreeMasterclass from '@/components/FreeMasterclass';

export const viewport: Viewport = {
    themeColor: "#0a121c"
};

export const metadata: Metadata = {
    metadataBase: new URL('https://kellyriggs.com'),
    title: "Kelly Riggs | Free Masterclass",
    description: "Watch Kelly Riggs' free sales leadership masterclass: three leadership shifts that help sales teams own the number.",
    openGraph: {
        siteName: "Kelly Riggs",
        url: "https://kellyriggs.com/free-masterclass",
        title: "Free Masterclass | Kelly Riggs",
        description: "Three leadership shifts that help sales teams own the number.",
        images: ["https://embed.vidello.com/416/12xv2mfa0xkd739k/video/splash.jpg"]
    }
};

export default function FreeMasterclassPage() {
    return (
        <Layout main className="gap-16 pb-32 pt-32 lg:pt-40">
            <FreeMasterclass />
        </Layout>
    );
};
