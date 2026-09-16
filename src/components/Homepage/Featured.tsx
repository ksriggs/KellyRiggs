"use client"

import type { BooksSingleQuery, BooksSingleQueryVariables } from '@/graphql/generated/graphql';

import { useSuspenseQuery } from '@tanstack/react-query';
import { FaCheck, FaCartShopping, FaArrowRightLong } from 'react-icons/fa6';

import { Image, SectionSubtitle, SectionTitle } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { text } from '@/utils';
import Link from 'next/link';

export default function Featured() {

    const COVER_RENDER = "https://api.kellyriggs.com/wp-content/uploads/2026/09/Five_Power_Moved_Book_Render_Front.png";

    const slug = "the-five-power-moves";
    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.BOOKs_SINGLE, slug],
        queryFn: () => gqlRequest<BooksSingleQuery, BooksSingleQueryVariables>(QUERIES.BOOKS_SINGLE, {
            id: slug
        })
    });

    const renderTakeAways = (takeAways: string) => {
        const parsedTakeAways = text.parsePipeSeparatorString(takeAways); 
        return parsedTakeAways.map((take, index) => (
            <div 
                key={`takeAway-${take}-${index}`}
                className="grid grid-cols-10 items-center font-semibold py-1.5"
            >
                <FaCheck className="text-primary size-6 w-10 col-span-1" />
                <p className="text-left col-span-9">{take}</p>
            </div>
        ));
    };

    return(
        <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-2 items-center justify-center">
                <p className="font-extrabold text-muted uppercase">New Release From Kelly Riggs</p>
                <SectionTitle className="text-accent!">
                    {data.book?.title}
                </SectionTitle>
                <SectionSubtitle>
                    {data.book?.subtitle}
                </SectionSubtitle>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full">
                <div className="flex-1">
                    <div className="flex flex-1 flex-col lg:flex-row gap-20">
                        <Image 
                            className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                            src={COVER_RENDER} 
                            alt={data.book?.title ?? ""}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <Card className="w-full">
                        <CardContent className="text-text pt-8 flex flex-col justify-center gap-8 text-center">
                            <div className="flex flex-col gap-8 w-full">
                                <div className="flex flex-col justify-center">
                                    <p className="font-bold text-2xl mb-2 text-accent">Learn how to:</p>
                                    {renderTakeAways(data.book?.takeAways ?? "")}
                                </div>
                                <p className="font-semibold text-md lg:text-lg">{data.book?.description ?? ""}</p>
                                <div className="flex gap-5 items-center justify-center">
                                    <a className="flex-1" href={data.book?.shopUrl ?? ""} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full text-card" size={"xl"} colorScheme="accent">
                                            <FaCartShopping className="size-6" />
                                            Buy Now
                                        </Button>
                                    </a>
                                    <Link className="flex-1" href="/new/the-five-power-moves">
                                        <Button className="w-full" size="xl">
                                            Check it out
                                            <FaArrowRightLong />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};