import { FaQuestionCircle } from 'react-icons/fa';

interface CoachingHeaderProps {
    title: string,
    subtitle: string,
    questions: string[],
    ctaTitle: string
};

function CoachingHeader({ title, subtitle, questions, ctaTitle }: CoachingHeaderProps) {

    const renderQuestions = () => {
            return questions.map((item, index) => (
                <div
                    key={`coaching-questions-${index}`}
                    className="flex gap-3 items-center font-semibold text-2xl bg-card p-4 rounded-lg"
                >
                    <FaQuestionCircle className="text-4xl text-accent" />
                    <p>{item}</p>
                </div>
            ));
        };

    return(
        <div className="flex flex-col gap-20 text-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="font-bold text-4xl">{title}</h1>
                <p className="font-semibold text-muted text-2xl w-full lg:w-8/12">
                    {subtitle}
                </p>
            </div>
            <div className="flex flex-col gap-5">
                {renderQuestions()}
            </div>
            <div className="">
                <p className="font-bold text-3xl">{ctaTitle}</p>
            </div>
        </div>
    );
};

export default CoachingHeader;