interface CarouselIndicatorProps {
    maxItems: number,
    currentIndex: number
};

function CarouselIndicators({ maxItems, currentIndex }: CarouselIndicatorProps) {

    const renderIndicators = () => {
        const Indicators = [];

        for(let i = 0; i < maxItems; i++) {
            Indicators.push(
                <div
                    key={`carousel-indicator-${i}`}
                    className={`
                        h-3 w-3 bg-card-light rounded-full duration-300
                        ${currentIndex === i && "bg-accent! h-4 w-4"}
                    `}
                />
            );
        };
        return Indicators;
    };

    return(
        <div className="absolute bottom-0 flex items-center justify-center w-full gap-4">
            {renderIndicators()}
        </div>
    );
};

export default CarouselIndicators;