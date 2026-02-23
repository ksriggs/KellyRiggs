import React from 'react';

function SectionSubtitle({ className, children }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {

    return(
        <p className={`font-semibold text-lg lg:text-xl text-muted text-center ${className}`}>
            {children}
        </p>
    );
};

export default SectionSubtitle;