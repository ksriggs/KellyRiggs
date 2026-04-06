import type { IconType } from 'react-icons';

import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProfitKillerCardProps {
    title: string,
    icon: IconType,
    solutionButtonText: string,
    solutionButtonUrl: string
};

function ProfitKillerCard({ title, icon, solutionButtonText, solutionButtonUrl, children }: React.PropsWithChildren<ProfitKillerCardProps>) {

    const Icon = icon;

    return(
        <Card className="w-full">
            <CardContent className="text-text pt-5 flex flex-col gap-8 font-semibold h-130 text-center">
                <div className="flex flex-col gap-3 items-center justify-center text-accent">
                    <Icon className="text-5xl" />
                    <h1 className="font-bold text-3xl">{title}</h1>
                </div>
                {children}
            </CardContent>
            <CardFooter className="flex flex-col gap-8 pb-10">
                <div className="w-full">
                    <Link href={solutionButtonUrl}>
                        <Button className="text-text text-lg w-full" size="lg">
                            {solutionButtonText}
                        </Button>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProfitKillerCard;