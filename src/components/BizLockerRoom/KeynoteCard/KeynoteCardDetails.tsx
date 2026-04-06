import React from 'react';

import { SectionSubtitle, SectionTitle } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

interface KeynoteCardDetailsProps {
    title: string,
    subtitle?: string,
    description: React.ReactNode
};

function KeynoteCardDetails({ title, subtitle, description }: KeynoteCardDetailsProps) {

    return(
        <Card className="text-text flex-1">
            <CardContent className="flex flex-col gap-10 items-center justify-center font-semibold text-center min-h-130 pt-6">
                <div>
                    <SectionTitle className="text-4xl!">
                        {title}
                    </SectionTitle>
                    <SectionSubtitle>
                        {subtitle}
                    </SectionSubtitle>
                </div>
                <div className="w-full lg:w-10/12">
                    {description}
                </div>
            </CardContent>
        </Card>
    );
};

export default KeynoteCardDetails;