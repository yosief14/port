export type TimelineElement = {
    id: number;
    title: string;
    company?: string;
    location: string;
    description: string;
    buttonText: string;
    date: string;
    icon: string;
    color: string;
    tech: string[];

};

const timelineElements: TimelineElement[] = [
    {
        id: 1,
        title: "Colorado State University",
        company: "Bachelor's Degree in Computer Science",
        location: "Fort Collins, CO",
        description: "Completed my degree in Computer Science",
        buttonText: "Details",
        date: "2018-2022",
        icon: "school",
        color: "blue",
        tech: [],
    },
    {
        id: 2,
        title: "Software Developer Internship",
        company: "Encompass Technologies",
        location: "Fort Collins, CO",
        description: "Worked on devloping dashboards with JS, HTML, and CSS and maintaining backend with C# and SQL.",
        buttonText: "Details",
        date: "Summer 2021",
        icon: "work",
        color: "purple",
        tech: ["JavaScript", "HTML", "CSS"],
    },
    {
        id: 3,
        title: "Associate Software Engineer",
        company: "Carat",
        location: "Fort Collins, Colorado",
        description: "Created new and refactored old UI components with React.js and Next.js, as well as optimizing api calls in Express.js.",
        buttonText: "Details",
        date: "2023-2024",
        icon: "work",
        color: "yellow",
        tech: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
        id: 4,
        title: "Full-Stack Software Engineer",
        company: "Foureyes",
        location: "Fort Collins, Colorado",
        description: "Full-stack engineer using generative AI tools to build data pipeline applications on cloud-native platforms to capture and display user data for thousands of car dealerships industry-wide",
        buttonText: "Details",
        date: "2024-2026",
        icon: "work",
        color: "orange",
        tech: ["React", "HTML", "CSS", "JavaScript"],
    },

];

export default timelineElements.reverse();