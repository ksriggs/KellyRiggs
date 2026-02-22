import { SectionTitle } from '../common';
import { FaCheckCircle } from 'react-icons/fa';

function AboutHighlights() {

    const items: string[] = [
        "Award-Winning co-author of Counter Mentor Leadership",
        "Author of Quit Whining and Start SELLING! A Step-by-Step Guide to a Hall of Fame Career in Sales",
        "Founder of the Business LockerRoom, Inc. (2006)",
        "Member of the prestigious Forbes' Coaches Council",
        "In-demand platform keynote speaker",
        "Former 2-Time National Salesperson-of-the-Year",
        "Former Corporate Director of Sales Development",
        "Successful Entrepreneur",
        "Manager and lead trainer in 2 corporate sales training programs"
    ];

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