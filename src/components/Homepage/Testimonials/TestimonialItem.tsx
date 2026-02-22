import { FaQuoteLeft, FaQuoteRight, FaUser } from 'react-icons/fa6';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface TestimonialItemProps {
    title: string,
    subtitle: string,
    content: string
};

function TestimonialItem({ title, subtitle, content }: TestimonialItemProps) {

    return(
        <div className="h-160 flex items-center justify-center">
            <Card className="text-text h-140">
                <CardHeader className="relative flex items-center justify-center">
                    <div className="border-4 border-muted rounded-full p-7 bg-card-light absolute -top-13">
                        <FaUser className="text-4xl" />
                    </div>
                </CardHeader>
                <CardContent className="mt-5 relative flex flex-col justify-center gap-5 h-90">
                    <FaQuoteLeft className="text-accent text-3xl" />
                    <p className="font-semibold">{content}</p>
                    <FaQuoteRight className="text-accent text-3xl absolute right-5 bottom-0" />
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-end h-30 text-left">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg text-muted font-semibold">{subtitle}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TestimonialItem;