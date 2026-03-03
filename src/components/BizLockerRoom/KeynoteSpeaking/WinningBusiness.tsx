
import { KeynoteCard, type KeynoteCardProps } from './KeynoteCard';

interface WinningBusinessProps {
    direction: KeynoteCardProps["direction"]
};

function WinningBusiness({ direction }: WinningBusinessProps) {

    return(
        <KeynoteCard
            title="Winning Business in Any Economy"
            direction={direction}
            subtitle="3 Mistakes You Can't Afford to Make"
            timeNeeded="Variable"
            audience={[
                "CEO's",
                "Business Owners",
                "Corporate Executives",
                "Executive Sales Managers"
            ]}
            description={(
                <p>
                    In the current economy, leaders face hard choices: how to sustain or increase market share, 
                    how to create a competitive edge, how to adapt to a rapidly moving target - even how to survive.
                    <br /><br />
                    These issues demand immediate attention, but, unfortunately, the solutions are often difficult 
                    to find because the problems are systemic; i.e., they are ingrained into the leadership practices 
                    of companies that have previously relied almost exclusively on technical competence for their success.
                    <br /><br />
                    In this presentation, you will discover the four critical areas company leadership must address 
                    in order to create stability, unlock innovation, and provide the potential to successfully deal 
                    with the many challenges currently facing.
                </p>
            )}
        />
    );
};

export default WinningBusiness;