"use client"

import type { BooksSingleQuery, BooksSingleQueryVariables } from '@/graphql/generated/graphql';

import { useSuspenseQuery } from '@tanstack/react-query';
import { FaCheck, FaCartShopping, FaDownload } from 'react-icons/fa6';

import { Image, LightBox, MotionHover } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';
import { text } from '@/utils';
import { useState } from 'react';

export default function TheFivePowerMovesBook() {

    const COVER_FRONT = "https://api.kellyriggs.com/wp-content/uploads/2026/09/five-power-moves-cover_front.png";
    const COVER_RENDER = "https://api.kellyriggs.com/wp-content/uploads/2026/09/Five_Power_Moved_Book_Render_Front.png";
    const FREE_DOWNLOAD_LINK = "https://api.kellyriggs.com/wp-content/uploads/2026/09/five-power-moves-chapters-1-to-6.pdf";

    const [open, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const images = [COVER_FRONT];

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
                className="flex gap-3 items-center justify-center text-md lg:text-lg font-semibold my-1 w-full"
            >
                <FaCheck className="text-primary text-3xl" />
                <p>{take}</p>
            </div>
        ));
    };

    const renderImages = () => {
        return images.map((item, index) => (
            <MotionHover
                key={`book-cover-${index}`}
                className={`
                    w-80 h-120 flex overflow-hidden rounded-xl hover:cursor-zoom-in
                `}
                onClick={() => {
                    setImageIndex(index);
                    setIsOpen(true);
                }}
            >
                <Image 
                    className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                    src={item} 
                    alt={`Five Power Moves Cover ${index}`}
                />
            </MotionHover>
        ));
    };

    const renderDownloadButton = () => (
        <Button className="w-full" size="xl" asChild>
            <a href={FREE_DOWNLOAD_LINK} download="five-power-moves-chapters-1-to-6.pdf" target="_blank" rel="noopener noreferrer">
                <FaDownload  className="size-6" />
                Download the First 6 Chapters 
            </a>
        </Button>
    );

    const renderBook = () => {
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
                        
                        <div className="flex flex-col lg:flex-row gap-20">
                            <Image 
                                className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                                src={COVER_RENDER} 
                                alt={book?.title ?? ""}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 justify-center w-full">
                            <div className="flex-1">
                                <a className="flex-1" href={book?.shopUrl ?? ""} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full text-card" size={"xl"} colorScheme="accent">
                                        <FaCartShopping className="size-6" />
                                        Buy Now
                                    </Button>
                                </a>
                            </div>
                            <div className="flex-1">
                                {renderDownloadButton()}
                            </div>
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
                <div className="flex flex-col gap-20 items-center justify-center">
                    <div className="w-80 h-120 flex overflow-hidden rounded-xl">
                        
                        {renderImages()}
                    </div>
                    <div>
                        {renderDownloadButton()}
                    </div>
                </div>
                <LightBox 
                    open={open}
                    setOpen={setIsOpen}
                    index={imageIndex}
                    images={images}
                />
            </div>
        );
    };

    return renderBook();
};