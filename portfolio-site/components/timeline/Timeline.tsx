import timelineElements from "@/public/timelineAssets/timelineElements";
import schoolIcon from "@/public/timelineAssets/school.svg";
import workIcon from "@/public/timelineAssets/work.svg";
import TimelineEntry from "./TimelineEntry";
import React, { useLayoutEffect, useState } from 'react';
import MobileTimelineEntry from "./MobileTimelineEntry";


export default function Timeline() {


    return (
        <section className="flex flex-col items-start  relative">
            <div className="hidden sm:block">
                {timelineElements.map((element, index) => {

                    return <TimelineEntry key={element.id} element={{ ...element }} delay={index} />
                })}
            </div>

            <div className=" block sm:hidden ">
                {timelineElements.map((element, index) => {
                    return <MobileTimelineEntry key={element.id} element={{ ...element }} delay={index} last={(index >= timelineElements.length - 1)} />
                })}
            </div>
        </section>
    )
}
