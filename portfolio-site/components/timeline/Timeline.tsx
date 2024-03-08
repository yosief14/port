import timelineElements from "@/public/timelineAssets/timelineElements";
import schoolIcon from "@/public/timelineAssets/school.svg";
import workIcon from "@/public/timelineAssets/work.svg";
import TimelineEntry from "./TimelineEntry";
export default function Timeline() {
    return (
        <section className="flex flex-col relaitve">
            {timelineElements.map((element, index) => {

                return <TimelineEntry key={element.id} element={{ ...element }} delay={index} />
            })}
        </section>
    )
}