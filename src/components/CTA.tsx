import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { SectionSubtitle, SectionTitle } from './common';

import { CONTACT_INFO } from '@/constants';
import BookACall from './BookACall';

function CTA() {

    return(
        <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex flex-col gap-3">
                <SectionTitle>
                    Contact Kelly
                </SectionTitle>
                <SectionSubtitle>
                    For more information regarding fees and availability
                </SectionSubtitle>
            </div>
            <div className="bg-card flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10 p-16 w-full lg:w-8/12 rounded-lg">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-3xl" />
                        <p className="font-semibold text-xl">{CONTACT_INFO.EMAIL}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-3xl" />
                        <p className="font-semibold text-xl">{CONTACT_INFO.PHONE}</p>
                    </div>
                </div>
                <div className="flex-1 flex items-end justify-end">
                    <BookACall />
                </div>
            </div>
        </div>
    );
};

export default CTA;