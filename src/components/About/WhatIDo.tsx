import React from 'react';

interface WhatIDoProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
};

function WhatIDo({ className }: WhatIDoProps) {

    const items = [
        { 
            title: "What I Do",
            content: `
                I teach others how to compete and win in both sales and corporate 
                leadership. If you're tired of being stuck or being average, my talent is identifying 
                the core issues and teaching you exactly what you need to do to overcome the problems.
            `
        },
        { 
            title: "What Makes Me Different",
            content: `
                I've been a No. 1 salesperson nationally, I've owned four 
                businesses, and I've had spectacular success as a coach and consultant. Very rarely 
                will you find all three of those components in one individual - someone who has done 
                it personally, taught others, and helped them successfully implement it.
            `
        },
        { 
            title: "Why It Works",
            content: `
                When you partner with me, you don't waste your time or your money on theory, 
                philosophy, or the same old cliches. You get the most efficient, effective, and affordable 
                performance coaching that executives and business owners are looking for right now.
            `
        },
    ];

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