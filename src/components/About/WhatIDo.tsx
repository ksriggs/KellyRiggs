import React from 'react';

interface WhatIDoProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"],
    items: {
        title: string,
        content: string
    }[]
};

function WhatIDo({ className, items }: WhatIDoProps) {

    const renderItems = () => {
        return items.map((item, index) => (
            <div 
                key={`what-i-do-${item.title}-${index}`}
                className="bg-card-light p-6 rounded-lg flex-1 flex flex-col gap-4 text-center"
            >
                <h1 className="font-bold text-2xl text-accent">{item.title}</h1>
                <p className="font-semibold">
                    {item.content}
                </p>
            </div>
        ));
    };

    return(
        <div className={`${className}`}>
            {renderItems()}
        </div>
    );
};

export default WhatIDo;