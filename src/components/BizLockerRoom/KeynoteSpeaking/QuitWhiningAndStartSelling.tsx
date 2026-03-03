import React from 'react';
import Link from 'next/link';

import { KeynoteCard, type KeynoteCardProps } from './KeynoteCard';
import { books } from '@/data';

interface QuitWhiningAndStartSellingProps {
    direction: KeynoteCardProps["direction"]
};

function QuitWhiningAndStartSelling({ direction }: QuitWhiningAndStartSellingProps) {
    return(
        <KeynoteCard
            title="Quit Whining and Start SELLING!"
            direction={direction}
            timeNeeded="Variable"
            audience={[
                "Business Owners",
                "CEO's",
                "Sales Managers",
                "Sales Executives",
                "Business Development Professionals",
                "Sales People"
            ]}
            description={(
                <React.Fragment>
                    <p>
                        The reality is that most salespeople create average (or worse) 
                        results simply because they don&apos;t have the critical skills salespeople 
                        MUST possess in order to succeed. While the tendency is to blame other 
                        people or their &quot;unique&quot; circumstances, the real reason salespeople 
                        typically fall short is they don&apos;t execute well.
                        <br /><br />
                        Success is not an accident. Based on the popular book, 
                        <Link href={`/books/${books.QUIT_WHINING_AND_START_SELLING.slug}`}>
                            Quit Whining and Start SELLING! A Step-by-Step Guide to a Hall of Fame Career in Sales
                        </Link>
                        , this presentation outlines four critical skills every successful salesperson must have before they can create Top 10% results.
                    </p>
                </React.Fragment>
            )}
        />
    );
};

export default QuitWhiningAndStartSelling;