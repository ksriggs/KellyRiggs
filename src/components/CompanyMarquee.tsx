import { Marquee } from '@/components/common';
import { GEA, Hubblle, PPG, UNFI, Watco } from '@/components/common';

interface CompanyMarqueeProps {
    fill?: string
};

function CompanyMarquee({ fill="#ffffff" }: CompanyMarqueeProps) {

    return(
        <Marquee gapBetween={20}>
            <div className="flex w-fit gap-x-20 opacity-50 justify-center items-center">
                <GEA height={200} width={200} fill={fill} />
                <Hubblle height={200} width={200} fill={fill} />
                <PPG height={150} width={150} fill={fill} />
                <UNFI height={200} width={200} fill={fill} />
                <Watco height={130} width={130} fill={fill} />
            </div>
        </Marquee>
    );
};

export default CompanyMarquee;