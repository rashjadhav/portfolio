import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,


} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React js Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },


    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Web Designer & Developer",
        company_name: "SmartUp India Ventures",
        icon: starbucks,
        iconBg: "#383E56",
        date: "July 2022 - May 2023",
        points: [
            "Developed and maintained websites using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products",
            "Designing, writing, and editing website content.",
            "Understands UI, cross-browser compatibility, and general web functions and standards.",
            "Executes assignments with the use of web applications, scripts, and programming",
            "For designing & developing i have used Reactjs, HTML, CSS,PHP,JavaScript ,SQL and APIs.",
            "Evaluated written code to ensure it meets industry standards and is compatible with all devices.",

        ],
    },
    {
        title: "Software Developer",
        company_name: "Autopeepal Service Solutions",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "October 2021 - March 2022",
        points: [
            "Develop and implement new software programs Maintain and improve the performance of existing software.",
            "Test and maintain software products to ensure strong functionality and optimization Recommend improvements to existing software programs as necessary.",

        ],
    },
    {
        title: "Senior Supply Chain Engineer",
        company_name: "Stellar value chain solutions pvt.ltd.",
        icon: shopify,
        iconBg: "#383E56",
        date: "July 2021 - October 2021",
        points: [
            "Planned and implemented the overall supply chain strategy.",
            "Collaborated with Sales, Operations, and Customer Service teams.",
            "Suggested solutions for process improvements.",
            "Identified process bottleneck and implemented solutions in a timely manner.",
            "Build and maintained good relationships with vendors",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Rathod Food",
        description:
            "Web-based platform that allows users to order the raw chicken from 5 Star Chicken and enjoy the chicken at home, providing a new  and easy solution for fulfilling the chicken craving.",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://rathodsfood.com/",
    },
    {
        name: "Circuit House",
        description:
            "Web-based platform that allows users to take a look of hotel and delicious dishes, so that the user can go and experience the good food with a good ambience. Also user can book the table in advance",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://circuithousebalewadihighstreet.com/",
    },
    {
        name: "Breath Beauty",
        description:
            "A website through which the users can take a look at treatments and facalities provided by Breath Beauty and then visit the salon, also the users can book the appointment in advance through website .",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "http://startupvishwa.com//",
    },
    {
        name: "Shawlet",
        description:
            "Web-based platform that allows users to order the delicious chocolates from Shawlet, providing a new  and easy solution for fulfilling the chocolate craving.",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Wordpress",
                color: "pink-text-gradient",
            },

        ],
        image: figma,
        source_code_link: "https://www.shawlet.in/",
    },

    {
        name: "SmartUp India Ventures",
        description:
            "Smartup is a marketing & advertising company based in Pune that helps startups to achieve their business outcomes. SmartUp create and develop brands. ",
        tags: [
            {
                name: "PHP",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: docker,
        source_code_link: "https://smartupindia.co/index.html",
    },
    {
        name: "Movies Reviews",
        description:
            "Web-based platform that allows users to give reviews about movies. The users can express their feelings frankly through the review section present in the Website",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
        ],
        image: meta,
        source_code_link: "https://moviesreviews-anxtdpu6j-rashjadhav.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };
