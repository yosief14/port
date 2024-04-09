import SectionTitle from "../SectionTitle"
import Timeline from "./Timeline"
export default function TimelineSection() {
    //TODO add mobile view
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-[85%] gap-10 mt-80
     ">

            <SectionTitle id="timeline" title="Timeline" />
            <Timeline />
        </section>
    )
}