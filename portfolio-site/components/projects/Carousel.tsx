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

const projects = [{ title: "0", descriptions: "Jobs board front end to help me track my job applications", img: "/dev-quest.jpg", link: "htttps://github.com/Dev-Quest" },
{ title: "1", descriptions: "Jobs board front end to help me track my job applications", img: "/dev-quest.jpg", link: "htttps://github.com/Dev-Quest" },
{ title: "2", descriptions: "Jobs board front end to help me track my job applications", img: "/dev-quest.jpg", link: "htttps://github.com/Dev-Quest" },
{ title: "3", descriptions: "Jobs board front end to help me track my job applications", img: "/dev-quest.jpg", link: "htttps://github.com/Dev-Quest" },
{ title: "4", descriptions: "Jobs board front end to help me track my job applications", img: "/dev-quest.jpg", link: "htttps://github.com/Dev-Quest" },]

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
                        <ProjectCard title={project.title} description={project.descriptions} img={project.img} link={project.link} />

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </>
    )
}

