"use client"

import { MotionFadeIn, SectionTitle } from '@/components/common';
import TestimonialItem from './TestimonialItem';
import { Carousel } from '@/components/common';

interface Testimonial {
    title: string,
    subtitle: string,
    content: string
};

const testimonials: Testimonial[] = [
    {
        title: "B. Krumsee",
        subtitle: "Regional Sales Manager",
        content: `
            This sales training course was by far the most complete sales training I've had. 
            The content was clear, logical and effective. Kelly has obviously put a lot of 
            thought and expertise into designing it.

            The main benefits came from doing assignments, receiving individual feedback 
            and interacting with Kelly and other participants.

            This format gave me the confidence to implement new sales planning in our 
            organization. I didn't just learn “how” to Crush Your Number but the “what” and “why” 
            also became much clearer.
        `
    },
    {
        title: "B. Silverman",
        subtitle: "VP, Audience Development",
        content: `
            Kelly electrified the room! He has a no BS kind of way of teaching, and really 
            resonated with both SDRs and salespeople. He managed to change the way we think about 
            selling, make us proud to be sellers, and force us to think about how we were providing 
            value to our clients. Kelly did a wonderful job teaching us why it's so valuable to be 
            excited and confident, and gave us the tools to really make a difference. Most sales 
            trainings are forgotten within weeks if not days, but we're still talking about Kelly!"
        `
    },
    {
        title: "G. Reynolds",
        subtitle: "Regional Manager",
        content: `
            I have participated in many different leadership training programs in my 30 plus years 
            in the coatings industry. Kelly's training program is the only one that has gone deeper 
            than just telling me how HE became successful. Instead he has established a training program 
            that shows practical applications drawing from his understanding of changing the behavior 
            managers and how they coach and train their employees. I highly recommend Kelly's program 
            to those who a serious about changing their company for the better.
        `
    },
    {
        title: "Mike Kunkle",
        subtitle: "VP, Sales Transformation Services",
        content: `
            If you're looking for good books to read a good sales expert to follow, an Internet radio show 
            to listen to, a sales trainer, speaker, or consultant, I highly endorse Kelly Riggs. His work 
            on sales and sales leadership ranks among the finest you'll find.
        `
    },
    {
        title: "Dolores Alonso",
        subtitle: "Senior Director",
        content: `
            Kelly was a presenter at our Sales and Marketing Conference. The comments we received from 
            his presentation were outstanding, and he received the highest ratings in our post-conference 
            survey to attendees! Kelly is dynamic and high-energy and challenged the audience with insight 
            into obstacles that hinder success. Kelly was a hit and I would highly recommend him to any 
            organization!
        `
    },
    {
        title: "Jay Stephens",
        subtitle: "CEO, SCFM, Inc.",
        content: `
            Kelly Riggs has been a trusted advisor and coach to our team for a number of years. He has been 
            instrumental in helping us to develop a special culture here through the use of practical exercises, 
            instruction, and both individual and group coaching. Our people trust and highly respect Kelly, and 
            several of them have sought him out for individual coaching. I count Kelly as both a trusted advisor 
            and a friend. I don't hesitate to recommend him to my CEO peers who are looking for leadership and 
            management advice and help for their organizations.
        `
    },
];

function Testimonials() {

    const renderTestimonials = () => {
        const Items = testimonials.map((item, index) => (
            <div key={`testimonials-${index}`} className="h-auto">
                <TestimonialItem 
                    title={item.title}
                    subtitle={item.subtitle}
                    content={item.content}
                />
            </div>
        ));

        return(
            <div className="w-6/12">
                <Carousel items={Items} />
            </div>
        );
    };

    return(
        <div className="flex flex-col items-center justify-center gap-10">
            <MotionFadeIn>
                <div className="text-center flex flex-col gap-3">
                    <SectionTitle>What Do People Say?</SectionTitle>
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-20 lg:gap-8 mt-20 lg:gap-y-20 flex-wrap items-center justify-center">
                    {renderTestimonials()}
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default Testimonials;