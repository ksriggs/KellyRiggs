"use client"

import type { BooksListQuery, BooksListQueryVariables } from '@/graphql/generated/graphql';

import { useQuery } from '@tanstack/react-query';

import { MotionFadeIn, SectionSubtitle, SectionTitle, Spinner } from '@/components/common';
import BookCard from './BookCard';

import { QUERY_KEYS } from '@/constants';
import { gqlRequest, QUERIES } from '@/graphql';

function BookList() {

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BOOKS_LIST],
        queryFn: () => gqlRequest<BooksListQuery, BooksListQueryVariables>(QUERIES.BOOKS_LIST)
    });

    const renderBooks = () => {
        if(!data) return;

        const books = data.books?.edges ?? [];

        const orderedBooks = books.sort((a, b) => (a.node?.order ?? 0) - (b.node?.order ?? 0));

        return orderedBooks.map((book, index) => {      
            return(
                <MotionFadeIn key={`book-${book.node.title}-${index}`}>
                    <BookCard 
                        title={book.node.title as string}
                        subtitle={book.node.subtitle as string}
                        coverImage={book.node.coverImage?.node.mediaItemUrl as string}
                        shopUrl={book.node.shopUrl as string}
                        description={book.node.description as string}
                        secondDescription={book.node.secondDescription as string}
                        takeAways={book.node.takeAways as string}
                    />
                </MotionFadeIn>
            );
        });
    };

    if(!data || isLoading) {
        return <Spinner />;
    }

    return(
        <div className="flex flex-col gap-20">
            <MotionFadeIn>
                <div className="flex flex-col justify-center items-center gap-3">
                    <SectionTitle>Published Works</SectionTitle>
                    <SectionSubtitle className="w-full lg:w-6/12">
                        From practical guides to real world journeys. Explore the stories and insights I&apos;ve shared with the world.
                    </SectionSubtitle>
                </div>
            </MotionFadeIn>
            {renderBooks()}
        </div>
    );
};

export default BookList;