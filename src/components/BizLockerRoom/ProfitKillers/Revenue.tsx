import { FaMoneyBillWave } from 'react-icons/fa';

import ProfitKillerCard from './ProfitKillerCard';

function Revenue() {

    return(
        <ProfitKillerCard
            title="A Revenue Problem"
            icon={FaMoneyBillWave}
            solution="Effective Sales Training"
            solutionButtonText="Sales Training"
            solutionButtonUrl=""
        >
            <p>
                Your sales revenue is disappointing. Margins are falling. Only a few of your salespeople 
                seem to achieve their annual objectives. Many of your salespeople seem more like 
                professional visitors than trained sales professionals.
            </p>
            <p className="font-bold text-accent">These are all sales training issues.</p>
            <p>
                With the right training, your sales team can rebuild your sales pipeline, dramatically 
                improve sales revenue AND margins, and win bigger opportunities more often.
            </p>
        </ProfitKillerCard>
    );
};

export default Revenue;