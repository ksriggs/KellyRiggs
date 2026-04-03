import { FaCheck } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/common';

import { text } from '@/utils';

interface BookProps {
    title: string,
    subtitle: string,
    coverImage: string,
    shopUrl: string,
    takeAways: string,
    description: string,
    secondDescription: string
};

function BookCard(props: BookProps) {

    const { 
        title, 
        subtitle, 
        coverImage, 
        shopUrl, 
        description, 
        takeAways, 
        secondDescription
    } = props;

    const renderTakeAways = () => {

        const parsedTakeAways = text.parsePipeSeparatorString(takeAways); 
        return parsedTakeAways.map((take, index) => (
            <div 
                key={`takeAway-${take}-${index}-${title}`}
                className="flex gap-3 items-center text-lg font-semibold my-1"
            >
                <FaCheck className="text-primary text-3xl" />
                <p>{take}</p>
            </div>
        ));
    };

    return(
        <Card>
        <CardContent className="text-text py-5">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-15 items-center">
            <div className="flex flex-col justify-center items-center gap-5 pt-5 lg:pt-0">
                <div className="w-60 h-90 flex overflow-hidden">
                    <Image 
                        className="shrink-0 relative object-cover w-full h-full rounded-lg" 
                        src={coverImage} 
                        alt={title}
                    />
                </div>
                <a href={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                        Buy Now
                    </Button>
                </a>
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-bold text-accent">{title}</h1>
                    <p className="font-semibold text-muted text-lg lg:text-2xl">{subtitle}</p>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-semibold text-md lg:text-lg text-center lg:text-left">{description}</p>
                    <div>
                        <p className="font-bold text-2xl mb-2 text-center lg:text-left">Learn how to:</p>
                        {renderTakeAways()}
                    </div>
                    <p className="font-semibold text-md lg:text-lg text-center lg:text-left">{secondDescription}</p>
                </div>
            </div>
        </div>
        </CardContent>
        </Card>
    );
};

export default BookCard;
