import { KeynoteCard, type KeynoteCardProps } from './KeynoteCard';

interface CoachingForLeadersProps {
    direction: KeynoteCardProps["direction"]
};

function CoachingForLeaders({ direction }: CoachingForLeadersProps) {

    return(
        <KeynoteCard
            title="Coaching For Leaders"
            direction={direction}
            subtitle="How to Transform Potential into Performance"
            timeNeeded="Variable"
            audience={[
                "Managers",
                "Execs"
            ]}
            description={(
                <p>
                    Harold Geneen said, “Words are words…but only performance is reality.” The 
                    question is, how do you get the very best from your employees? How do you transform potential 
                    into performance?
                    <br /><br />
                    Without question, coaching skills are critical, just as they are in any sport. Yet, the one 
                    crippling issue common to organizations of all sizes and complexities is the unwillingness or 
                    inability to address performance issues. Organizations don&apos;t know how to create accountability, 
                    and the evidence is typically found in failed or failing performance management systems. In this 
                    presentation, you will discover the keys to employee coaching and performance improvement, and 
                    learn how they relate to the all-important concept of employee engagement.
                </p>
            )}
        />
    );
};

export default CoachingForLeaders;