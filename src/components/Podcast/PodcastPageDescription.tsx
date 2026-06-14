import React from 'react'

interface PodcastPageDescriptionProps {
    description: string,
    callout: string
};

function PodcastPageDescription({ description, callout }: PodcastPageDescriptionProps) {

    return(
        <React.Fragment>
            <div 
                className={`
                    font-semibold text-lg w-full lg:w-8/12 text-center flex 
                    flex-col items-center justify-center gap-5 bg-card-light 
                    py-2.5 px-4 rounded-lg
                `}
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <div>
                <p className="font-bold text-2xl text-center">
                    {callout}
                </p>
            </div>
        </React.Fragment>
    );
};

export default PodcastPageDescription;