import { graphql } from '@/graphql/generated';

export const TESTIMONIALS = graphql(`
    query Testimonials {
        testimonials {
            edges {
                node {
                    testimonialAuthor
                    testimonialAuthorTitle
                    testimonialAvatar {
                        node {
                            mediaItemUrl
                        }
                    }
                    testimonialContent(format: RAW)
                    testimonialCategory
                }
            }
        }
    }
`);