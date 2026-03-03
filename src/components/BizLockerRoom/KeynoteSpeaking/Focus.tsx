import { KeynoteCard, type KeynoteCardProps } from './KeynoteCard';

interface FocusProps {
    direction: KeynoteCardProps["direction"]
};

function Focus({ direction }: FocusProps) {

    return(
        <KeynoteCard
            title="FOCUS"
            direction={direction}
            subtitle="How Ordinary People Create Uncommon Performance"
            timeNeeded="Variable"
            audience={[
                "CEO's",
                "Executives",
                "Managers",
                "Employee's"
            ]}
            description={(
                <p>
                    Pay close attention to what people say and you will see that, in business 
                    or sports, or the performing arts, or life in general, the common thread to 
                    success is FOCUS. Rarely do champions discuss their achievements or the barriers 
                    they have overcome without some reference to the idea of focus.
                    <br /><br />
                    It is, in fact, a significant component of what allows ordinary people to achieve 
                    extraordinary things. Which begs the question: What is focus exactly? Can it be 
                    duplicated at will? Is there an actual process to creating focus?
                    <br /><br />
                    In this presentation, Kelly presents &quot;5 Principles of Focus&quot; that world-class 
                    performers use consistently to create success in any endeavor; five principles 
                    that you can put to work immediately to improve your own performance.
                </p>
            )}
        />
    );
};

export default Focus;