export interface Book {
    order: number,
    title: string,
    subtitle: string,
    coverUrl: string,
    shopUrl: string,
    description: string,
    takeAways: string[],
    secondDescription?: string
};

export const QUIT_WHINING_AND_START_SELLING: Book = {
    order: 1,
    title: "Quit Whining and Start Selling!",
    subtitle: "A Step-By-Step Guide To A Hall Of Fame Career In Sales",
    shopUrl: "https://www.amazon.com/Whining-Start-Selling-Step-Step-ebook/dp/B00CX7P34G/",
    coverUrl: "https://kellyriggs.com/wp-content/uploads/2018/05/QuitWhiningStartSELLING_BookCover_Final_Small.jpg",
    description: `
        This book presents a step-by-step approach to selling that creates real and lasting 
        performance gains! Salespeople learn how to create a systematic sales process, 
        a more dynamic sales presentation, an effective territory management system, and much more.

        The reality is that your sales success is dependent on three things:  attitude, 
        selling skills, and discipline. So, while every salesperson wants to make more money, 
        few are willing to learn and practice the skills that create consistent success. How about you?
    `,
    takeAways: [
        "Consistently win more deals at better margins.",
        "Identify and close more high-value, high-probability opportunities.",
        "Gain control of your most valuable resource – your time.",
        "Dramatically increase your credibility with potential customers.",
        "Create a more powerful and compelling sales presentations."
    ],
    secondDescription: `
        This book will teach you the secrets of reaching the Top 5% in sales using a methodology 
        I created and have practiced for over 30 years. Whether you're a sales veteran or just 
        getting started, the techniques and ideas presented in Quit Whining and Start SELLING! 
        will dramatically impact your sales performance!
    `
};

export const COUNTER_MENTOR_LEADERSHIP: Book = {
    order: 2,
    title: "Counter Mentor Leadership",
    subtitle: "How to Unlock the Potential of the 4-Generation Workplace",
    shopUrl: "https://www.amazon.com/Counter-Mentor-Leadership-Potential-4-Generation-ebook/dp/B0786PBKQJ",
    coverUrl: "https://kellyriggs.com/wp-content/uploads/2019/03/CML-Cover_NEW-e1551471320799.jpg",
    description: `
        Co-written with his son, Robby Riggs, Counter Mentor Leadership is a "shamelessly funny, 
        brilliantly written" book.

        It is "one of the very few I would call a 'MUST read,'” says John Spence, one of the 
        Top 100 Business and Leadership experts in America.
    `,
    takeAways: [
        "Dramatically improve communication with your employees",
        "Create a culture of accountability - automatically!",
        "Understand different perspectives and establish clear expectations",
        "Negotiate the powerful new obstacles present in the modern workplace",
        "Continually and consistently improve your skills as a leader"
    ],
    secondDescription: `
        Using their unique COUNTER leadership model as a guide, Kelly and Robby 
        teach you how to use the "game-changing" skill of effective one-on-one meetings, 
        and how to use the "freedom box" concept to create employee ownership.
    `
};

export const ONE_ON_ONE_MANAGEMENT: Book = {
    order: 3,
    title: "1 on 1 Management®",
    subtitle: "What Every Great Manager Knows That You Don't",
    coverUrl: "https://m.media-amazon.com/images/I/41mYPnd7z0L._SY445_SX342_QL70_ML2_.jpg",
    shopUrl: "https://www.amazon.com/1-1-ManagementTM-Every-Manager-ebook/dp/B00GEJPXR6",
    description: `\
        The root causes for ineffective managers and disenfranchised employees are 
        mostly systemic, with the blame resting squarely on the flawed process that 
        routinely puts people into management slots without adequate preparation or training. 

        Developed from 20 years of management experience, 1-on-1 Management™ is a 
        step-by-step approach to effective management that creates real and lasting results. 
        Learn how to create an environment that engages employees and establishes a lasting 
        trust between managers and employees - the first step in the creation of a 
        high-performance team.
    `,
    takeAways: [
        "Significantly improve your communication skills using the 1-on-1 Meeting™",
        "Dramatically impact employee engagement and change your workplace culture",
        "Improve your ability to effectively manage performance",
        "Learn the coaching skills that will help you transform employee potential into real performance"
    ],
    secondDescription: `
        Most managers clearly recognize the challenges they face in balancing performance expectations 
        against employee satisfaction, but few have any idea as to how they should address those challenges. 
        1-on-1 Management™ will give you the answers you need.
    `
};

// export const THE_ONE_ON_ONE_SELLING_JOURNAL: Book = {
//     order: 4,
//     title: "The 1-On-1 Selling™ Journal",
//     subtitle: `Companion to "Quit Whining and Start Selling!"`,
//     coverUrl: "https://bizlockerroom.com/wp-content/uploads/2015/11/Journal-cover-5-finalSM.jpg",
//     shopUrl: "https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f78205597c5c0&mfid=1767210232487_f78205597c5c0#/checkout/openButton",
//     description: `
//         The 1-on-1 Selling™ Journal includes a set of practical sales tools that provide you the opportunity 
//         to identify those selling skills you may need to develop, to set your performance goals, and to 
//         identify your critical accounts. 

//         It includes 12 short but powerful sales lessons with one or more Action Steps for you, or your 
//         team, to complete.

//         And, to further reinforce each monthly sales lesson, there are powerful quotes used to illustrate 
//         a concept that is important to your selling success.
//     `,
//     takeAways: [
//         "Guide monthly or weekly sales meetings",
//         "Record sales goals and objectives",
//         "Identify and track your KEY and TARGET accountsRecord",
//         "Record notes or ideas from sales meetings or client meetings",
//         "To keep track of ideas and resources for your customers"
//     ]
// };

export const ALL_BOOKS = [
    QUIT_WHINING_AND_START_SELLING,
    COUNTER_MENTOR_LEADERSHIP,
    ONE_ON_ONE_MANAGEMENT,
];