import { KeynoteCard, type KeynoteCardProps } from './KeynoteCard';

interface LeadershipDilemmaProps {
    direction: KeynoteCardProps["direction"]
};

function LeadershipDilemma({ direction }: LeadershipDilemmaProps) {

    return(
        <KeynoteCard
            title="The Leadership Dilemma"
            direction={direction}
            subtitle="How to Unlock the Potential of the Chaotic"
            timeNeeded="Variable"
            audience={["Managers", "Execs"]}
            description={(
                <p className="font-semibold text-center">
                    Today&apos;s workplace is radically different than it was even 20 years ago, 
                    and the impact of technology is not always for the better. Now, there are now 
                    four generations of employees in the workplace, mashed together in a cauldron 
                    of constant change, distractions, and complexity.
                    <br />
                    <br />
                    Combined with the more traditional challenges of leadership - things like talent acquisition, 
                    communication, performance management, strategic planning, and much more - how is a manager to 
                    adapt? In this keynote, Kelly presents the most pressing leadership issues and offers specific 
                    approaches to dealing with the challenges of the new, technology-infected workplace.
                </p>
            )}
        />
    );
};

export default LeadershipDilemma;