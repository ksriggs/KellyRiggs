import { graphql } from '@/graphql/generated';

export const CLIENT_LOGOS = graphql(`
    query ClientLogos {
        clientLogos {
            edges {
                node {
                    logo {
                        node {
                            mediaItemUrl
                        }
                    }
                    title
                }
            }
        }
    }
`);