import { FaQuoteLeft, FaQuoteRight, FaUser } from 'react-icons/fa6';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface TestimonialItemProps {
    title: string,
    subtitle: string,
    content: string
};

function TestimonialItem({ title, subtitle, content }: TestimonialItemProps) {

    return(
        <div className="flex items-center justify-center pt-10 pb-10">
            <Card className="text-text">
                <CardHeader className="relative flex items-center justify-center">
                    <div className="border-4 border-muted rounded-full p-7 bg-card-light absolute -top-13">
                        <FaUser className="text-4xl" />
                    </div>
                </CardHeader>
                <CardContent className="mt-5 relative flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                        <FaQuoteLeft className="text-accent text-3xl" />
                        <div className="py-5 h-115 lg:h-50 flex items-center justify-center px-3">
                            <p className="font-semibold">{content}</p>
                        </div>
                        <FaQuoteRight className="text-accent text-3xl absolute right-5 bottom-0" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-end text-left flex-1 h-full">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg text-muted font-semibold">{subtitle}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TestimonialItem;