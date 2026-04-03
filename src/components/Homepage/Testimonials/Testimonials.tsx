"use client"

import type { 
    TestimonialsQuery, 
    TestimonialsQueryVariables 
} from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';

import { MotionFadeIn, SectionTitle, Spinner } from '@/components/common';
import TestimonialItem from './TestimonialItem';
import { Carousel } from '@/components/common';

import { gqlRequest, QUERIES } from '@/graphql';
import { QUERY_KEYS } from '@/constants';

function Testimonials() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.TESTIMONIALS],
        queryFn: () => gqlRequest<TestimonialsQuery, TestimonialsQueryVariables>(QUERIES.TESTIMONIALS)
    });

    const renderTestimonials = () => {
        if(!data) return;

        const testimonials = data.testimonials?.edges ?? [];
        const Items = testimonials.map((item, index) => (
            <div key={`testimonials-${index}`} className="h-auto">
                <TestimonialItem 
                    title={item.node.testimonialAuthor ?? ""}
                    subtitle={item.node.testimonialAuthorTitle ?? ""}
                    content={item.node.testimonialContent ?? ""}
                />
            </div>
        ));

        return(
            <div className="w-full lg:w-6/12">
                <Carousel items={Items} />
            </div>
        );
    };

    if(!data || isLoading) {
        return <Spinner />;
    }

    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <MotionFadeIn>
                <div className="text-center flex flex-col gap-3">
                    <SectionTitle>What Do People Say?</SectionTitle>
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-20 lg:gap-8 mt-20 lg:gap-y-20 flex-wrap items-center justify-center">
                    {renderTestimonials()}
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default Testimonials;