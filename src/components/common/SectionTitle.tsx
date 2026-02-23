import React from 'react';

function SectionTitle({ className, children }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {

    return(
        <h1 className={`text-4xl lg:text-5xl font-bold text-center ${className}`}>
            {children}
        </h1>
    );
};

export default SectionTitle;