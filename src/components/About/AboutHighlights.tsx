import { SectionTitle } from '../common';
import { FaCheckCircle } from 'react-icons/fa';

interface AboutHighlightsProps {
    items: string[]
};

function AboutHighlights({ items }: AboutHighlightsProps) {

    const renderItems = () => {
        return items.map((highlight, index) => (
            <div 
                key={`about-highlights-${index}`}
                className={`flex items-center gap-3 ${index % 2 === 0 ? "bg-card-light" : "bg-card"} p-4 rounded-lg`}
            >
                <FaCheckCircle className={`text-accent text-4xl`} />
                <p className="font-semibold text-lg">{highlight}</p>
            </div>
        ));
    };
    
    return(
        <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center text-center">
                <SectionTitle>
                    Highlights
                </SectionTitle>
            </div>
            <div className="flex flex-col gap-8">
                {renderItems()}
            </div>
        </div>
    );
};

export default AboutHighlights;