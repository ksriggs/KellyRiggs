"use client"

import type { BooksListQuery, BooksListQueryVariables } from '@/graphql/generated/graphql';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'motion/react';

import { Spinner, Image, SectionTitle, SectionSubtitle, MotionHover } from '@/components/common';
import { Button } from '@/components/ui/button';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

function BooksContainer() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BOOKS_LIST],
        queryFn: () => gqlRequest<BooksListQuery, BooksListQueryVariables>(QUERIES.BOOKS_LIST)
    });

    const renderBooks = () => {
        if(!data) return;

        const books = data.books?.edges ?? [];
        const orderedBooks = books.sort((a, b) => (a.node?.order ?? 0) - (b.node?.order ?? 0));

        return orderedBooks.map((item, index) => {
            const internalLink = `/books/${item.node.slug ?? ""}`;
            return(
                <motion.div
                    key={`books-page-list-${item.node.slug}-${index}`}
                    className="flex flex-col lg:flex-row gap-10"
                    initial={{ x: "-20dvw" }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, stiffness: 80, type: "spring" }}
                >
                    <div className="flex-1">
                        <Link href={internalLink}>
                            <MotionHover className={`
                                w-80 h-120 flex overflow-hidden duration-150
                                hover:cursor-pointer hover:shadow-primary/60 hover:shadow-2xl
                            `}>
                                <Image 
                                    className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                                    src={item.node.coverImage?.node.mediaItemUrl ?? ""} 
                                    alt={item.node.title ?? ""}
                                />
                            </MotionHover>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="font-bold text-4xl">{item.node.title}</h1>
                            <div className="h-1 w-full lg:w-10/12 mt-3 bg-accent rounded-lg" />
                        </div>
                        <p className="font-semibold leading-7 tracking-wide">{item.node.description}</p>
                        <div className="flex gap-5">
                            <a href={item.node.shopUrl ?? ""} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <FaShoppingCart />
                                Buy Now
                            </Button>
                            </a>
                            <Link href={internalLink}>
                                <Button variant={"outline"}>
                                    Learn More
                                    <FaArrowRightLong />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            );
        });
    };

    if(!data || isLoading) {
        return <Spinner />
    }

    return(
        <div className="w-full flex flex-col gap-20">
            <div className="flex flex-col items-center gap-3">
                <SectionTitle>
                    Published Works
                </SectionTitle>
                <SectionSubtitle className="w-full lg:w-6/12">
                    From practical guides to real world journeys. Explore the stories and insights I&apos;ve shared with the world.
                </SectionSubtitle>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-30 w-9/12">
                    {renderBooks()}
                </div>
            </div>
        </div>
    );
};

export default BooksContainer;