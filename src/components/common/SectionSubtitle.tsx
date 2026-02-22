import React from 'react';

function SectionSubtitle({ className, children }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {

    return(
        <p className={`font-semibold text-xl text-muted ${className}`}>
            {children}
        </p>
    );
};

export default SectionSubtitle;