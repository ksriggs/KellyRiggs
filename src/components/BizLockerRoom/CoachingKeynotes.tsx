import { KeynoteCard } from './KeynoteCard'

interface KeynoteItem {
    title: string,
    subtitle: string,
    timeNeeded: string,
    audience: string[],
    description: string
};

interface CoachingKeynotesProps {
    items: KeynoteItem[]
};

function CoachingKeynotes({ items }: CoachingKeynotesProps) {

    const renderContent = () => {
        return items.map((item, index) => (
            <KeynoteCard
                key={`keynote-coaching-content-${index}`}
                title={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                subtitle={item.subtitle}
                timeNeeded={item.timeNeeded}
                audience={item.audience}
                description={(
                    <div 
                        className="flex flex-col gap-6"
                        dangerouslySetInnerHTML={{ __html: item.description}} 
                    />
                )}
            />
        ));
    };

    return(
        <div className="flex flex-col gap-60">
            {renderContent()}
        </div>
    );
};

export default CoachingKeynotes;