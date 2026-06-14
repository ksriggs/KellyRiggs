import type { Viewport, Metadata } from 'next';
import type { AboutContentQuery, AboutContentQueryVariables } from '@/graphql/generated/graphql';

import { QueryClient } from '@tanstack/react-query';

import { Layout } from '@/components/common';
import { ContactContainer } from '@/containers';
import CTA from '@/components/CTA';

import { useThemeStore } from '@/store/theme';

import { QUERIES, gqlRequest } from '@/graphql';
import { QUERY_KEYS } from '@/constants';

export const viewport: Viewport = {
    themeColor: useThemeStore.getState().theme.colors.primary
};

export async function generateMetadata(): Promise<Metadata> {
    const queryClient = new QueryClient();
    const query = await queryClient.fetchQuery({
        queryKey: [QUERY_KEYS.ABOUT_CONTENT],
        queryFn: () => gqlRequest<AboutContentQuery, AboutContentQueryVariables>(QUERIES.ABOUT_CONTENT)
    });

    return {
        title: "Kelly Riggs | Content",
        description: query.aboutContents?.edges[0].node.mainContent,
        openGraph: {
            siteName: "Kelly Riggs",
            url: "https://kellyriggs.com/content",
            images: [
                {
                    url: "/icon.svg",
                    height: 192,
                    width: 192
                }
            ]
        }
    }
};

function Contact() {

    return(
        <Layout main transparent className="gap-10 mb-40 pt-40">
            <CTA />
            <div className="flex flex-col w-full items-center justify-center gap-10">
                <ContactContainer />
            </div>
        </Layout>
    );
};

export default Contact;