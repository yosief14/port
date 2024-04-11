import SectionTitle from "../SectionTitle"
import Timeline from "./Timeline"
export default function TimelineSection() {
    //TODO add mobile view
    return (
        <section className="flex-col items-center flex  w-full min-h-[500px] sm:h-[95%] relative gap-10 ">

            <SectionTitle id="timeline" title="Timeline" />
            <Timeline />
        </section>
    )
}