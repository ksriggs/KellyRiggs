import { FaQuestionCircle } from 'react-icons/fa';

import { Layout, SectionSubtitle, SectionTitle, YouTubePlayer } from '@/components/common';
import { Testimonials } from '@/components/Homepage';

import CTA from '@/components/CTA';
import BookACall from '@/components/BookACall';

import { YOUTUBE_VIDEO_IDS } from '@/constants';
import { KeynoteCard } from '@/components/BizLockerRoom/KeynoteSpeaking/KeynoteCard';

function Speaking() {

    const questions = [
        "Are you new to the role of CEO or executive manager?",
        "Are you experiencing challenges in engaging your team?",
        "Are you struggling with managing the performance of your key managers?",
        "Are you having trouble getting your people to row in the same direction?"
    ];

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
        <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
            <div className="w-full flex flex-col gap-15 items-center justify-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <SectionTitle>
                        COUNTER Mentor™ 
                    </SectionTitle>
                    <SectionSubtitle>
                        Leadership Coaching
                    </SectionSubtitle>
                </div>
                <BookACall className="w-full" containerClass="w-full lg:w-3/12" />
                <div className="w-full lg:w-8/12 rounded-lg overflow-hidden">
                    <YouTubePlayer 
                        className="h-120"
                        videoId={YOUTUBE_VIDEO_IDS.KEYNOTE_SPEAKER}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-20 text-center">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="font-bold text-4xl">Every Situation is Different.</h1>
                    <p className="font-semibold text-muted text-2xl w-full lg:w-8/12">
                        As I work with individuals and organizations throughout the United States - 
                        providing executive coaching for CEOs, Presidents, and company owners - I 
                        encounter different situations with dramatically different needs.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    {renderQuestions()}
                </div>
                <div className="">
                    <p className="font-bold text-3xl">1-on-1 Coaching is exactly what you&apos;re looking for.</p>
                </div>
            </div>
            <Testimonials />
            <div className="flex flex-col gap-60">
                <KeynoteCard
                    title="Customized Coaching Sessions"
                    direction="left"
                    timeNeeded="Twice Monthly"
                    audience={[
                        "CEO's",
                        "Presidents",
                        "General Managers",
                        "Company Owners",
                        "Executive Managers"
                    ]}
                    description={(
                        <p>
                            To create long-lasting changes in performance behavior - to dramatically increase employee 
                            engagement or sales performance - choose one of Kelly&apos;s popular and wildly successful 
                            coaching programs.
                            <br /><br />
                            Although coaching follows a general outline/agenda, each engagement is customized to the 
                            specific needs of the individual or corporation.
                            <br /><br />
                            Sessions create long-lasting changes in performance behavior and dramatically increase 
                            employee engagement and sales performance.
                        </p>
                    )}
                />
            </div>
            <CTA />
        </Layout>
    );
};

export default Speaking;