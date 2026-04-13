"use client"

import type { BooksSingleQuery, BooksSingleQueryVariables } from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';
import { FaCheck, FaCartShopping } from 'react-icons/fa6';

import { Spinner, Image } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { text } from '@/utils';

interface BookItemProps {
    slug: string
};

function BookItem({ slug }: BookItemProps) {

    const { data, isLoading } = useQuery({
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
                className="flex gap-3 items-center justify-center text-md lg:text-lg font-semibold my-1 w-full"
            >
                <FaCheck className="text-primary text-3xl" />
                <p>{take}</p>
            </div>
        ));
    };

    const renderBook = () => {
        if(!data) return;

        const book = data.book;

        return(
            <div className="flex flex-col gap-10 items-center justify-center">
                <div>
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="text-center flex flex-col items-center">
                            <h1 className="text-2xl lg:text-4xl font-bold text-accent">{book?.title ?? ""}</h1>
                            <p className="font-semibold text-muted text-lg lg:text-2xl">{book?.subtitle ?? ""}</p>
                            <div className="h-1.5 w-8/12 bg-accent rounded-full mt-4" />
                        </div>
                        <div className="w-80 h-120 flex overflow-hidden rounded-xl shadow-2xl shadow-card">
                            <Image 
                                className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                                src={book?.coverImage?.node.mediaItemUrl ?? ""} 
                                alt={book?.title ?? ""}
                            />
                        </div>
                        <div className="flex justify-center">
                            <a href={book?.shopUrl ?? ""} target="_blank" rel="noopener noreferrer">
                                <Button size={"lg"}>
                                    <FaCartShopping />
                                    Buy Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                <Card className="w-full lg:w-10/12">
                    <CardContent className="text-text pt-8 flex flex-col justify-center gap-8 text-center">
                        <div className="flex flex-col gap-8 w-full">
                            <p className="font-semibold text-md lg:text-lg">{book?.description ?? ""}</p>
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-bold text-2xl mb-2 text-accent">Learn how to:</p>
                                {renderTakeAways(book?.takeAways ?? "")}
                            </div>
                            <p className="font-semibold text-md lg:text-lg">{book?.secondDescription ?? ""}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return renderBook();
};

export default BookItem;