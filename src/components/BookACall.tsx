import React from 'react';
import { Button } from '@/components/ui/button';
import { URLS } from '@/constants';

interface BookACallProps {
    containerClass?: React.HTMLAttributes<HTMLAnchorElement>["className"]
    className?: React.HTMLAttributes<HTMLAnchorElement>["className"]
};

function BookACall({ containerClass, className }: BookACallProps) {
    return(
        <a href={URLS.CALENDLY} target="_blank" rel="noopener noreferrer" className={containerClass}>
            <Button size="lg" className={`text-xl py-7 ${className}`}>
                Book A Call!
            </Button>
        </a>
    );
};

export default BookACall;