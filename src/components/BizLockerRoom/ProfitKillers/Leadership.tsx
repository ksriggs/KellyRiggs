import { FaUsers } from 'react-icons/fa';

import ProfitKillerCard from './ProfitKillerCard';

function Leadership() {

    return(
        <ProfitKillerCard
            title="A Leadership Problem"
            icon={FaUsers}
            solution="1-on-1 Management®"
            solutionButtonText="Leadership Training"
            solutionButtonUrl=""
        >
            <p>
                You&apos;ve invested in good people, but keeping them motivated is a struggle. Poor performance 
                and frequent turnover is killing profits and slowing your growth. You find yourself &quot;doing everything,&quot; 
                and you&apos;re burning out. Worse, your newest employees question everything your doing...
            </p>
            <p className="font-bold text-accent">These are all leadership training issues.</p>
            <p>With the right training, you  reduce turnover, dramatically impact results, change your culture, and make work fun again. </p>
        </ProfitKillerCard>
    );
};

export default Leadership;