"use client"
import * as React from 'react';
import ProjectCard from './ProjectCard';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { title } from 'process';

const projects = [{ title: "DevQuest", descriptions: "Job Tracking application to help me track my job applications", img: "/dev-quest.jpg", liveLink: "https://dev-quest-seven.vercel.app/Home", githubLink: "https://github.com/yosief14/dev-quest" },
{ title: "Yummarizer", descriptions: "CLI tool to extract and summarize cooking videos", img: "/projectAssets/YummarizerLogo.png", liveLink: "", githubLink: "https://github.com/yosief14/yummarizer-cli" },
{ title: "Yosief's Portfolio", descriptions: "My personal portfolio website", img: "/projectAssets/portfolio.png", githubLink: "https://github.com/yosief14/port", liveLink: "https://yosiefgebremedhin.com/" }
]
export default function CarouselDemo() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (<>
        <span className='font-pixel text-sm'>{current} of {count}</span>
        <Carousel setApi={setApi} className="w-fit max-w-2xl ">
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index} className='flex flex-col items-center'>
                        <ProjectCard title={project.title} description={project.descriptions} img={project.img} githubLink={project.githubLink} liveLink={project.liveLink} />

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </>
    )
}

