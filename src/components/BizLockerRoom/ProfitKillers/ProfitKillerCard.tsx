import type { IconType } from 'react-icons';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProfitKillerCardProps {
    title: string,
    icon: IconType,
    solution: string,
    solutionButtonText: string,
    solutionButtonUrl: string
};

function ProfitKillerCard({ title, icon, solution, solutionButtonText, solutionButtonUrl, children }: React.PropsWithChildren<ProfitKillerCardProps>) {

    const Icon = icon;

    return(
        <Card className="w-full">
            <CardContent className="text-text pt-5 flex flex-col gap-8 font-semibold h-130">
                <div className="flex flex-col gap-3 items-center justify-center text-accent">
                    <Icon className="text-5xl" />
                    <h1 className="font-bold text-3xl">{title}</h1>
                </div>
                {children}
            </CardContent>
            <CardFooter className="flex flex-col gap-8 pb-10">
                <div className="bg-card-light w-full rounded-lg p-4 text-text">
                    <p className="font-bold text-secondary">Solution:</p>
                    <p className="font-semibold">{solution}</p>
                </div>
                <div className="w-full">
                    <Button className="text-text text-lg w-full" size="lg">
                        {solutionButtonText}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProfitKillerCard;