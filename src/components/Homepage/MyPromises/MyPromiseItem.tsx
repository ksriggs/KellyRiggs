import type { IconType } from 'react-icons';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface MyPromiseItemProps {
    title: string,
    icon: IconType,
    description: string
};

function MyPromiseItem({ title, icon, description }: MyPromiseItemProps) {

    const Icon = icon;

    return(
        <Card className="text-text flex flex-col items-center justify-center w-full lg:w-5/12">
            <CardHeader className="flex items-center justify-center gap-2">
                <Icon className="text-5xl text-accent" />
                <h1 className="text-3xl font-bold text-center">{title}</h1>
            </CardHeader>
            <CardContent className="text-center font-semibold w-full pb-10">
                <p>
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default MyPromiseItem;