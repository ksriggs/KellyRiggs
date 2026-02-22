import { MdCenterFocusStrong } from 'react-icons/md';

import ProfitKillerCard from './ProfitKillerCard';

function Focus() {

    return(
        <ProfitKillerCard
            title="A Focus Problem"
            icon={MdCenterFocusStrong}
            solution="COUNTER Leadership™"
            solutionButtonText="Executive Coaching"
            solutionButtonUrl=""
        >
            <div className="flex flex-col gap-5">
                <p>
                    Your company and employees seem to lack focus. The mission and vision statements on the wall 
                    seem hollow, and your people appear to be rowing in different directions. Hazy expectations 
                    allow individual work to fill the available time.
                </p>
                <p className="font-bold text-accent">
                    These are all FOCUS issues.
                </p>
                <p>
                    With the right training, you can develop a culture of performance and accountability, 
                    and succeed in gettin everyone rowing in the same direction at the same time.
                </p>
            </div>
            <div>

            </div>
            <div>
                
            </div>
        </ProfitKillerCard>
    );
};

export default Focus;