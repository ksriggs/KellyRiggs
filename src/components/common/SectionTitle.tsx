import React from 'react';

function SectionTitle({ className, children }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {

    return(
        <h1 className={`text-5xl font-bold ${className}`}>
            {children}
        </h1>
    );
};

export default SectionTitle;