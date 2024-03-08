import SectionTitle from "../SectionTitle"
import Timeline from "./Timeline"
export default function TimelineSection() {
    return (
        <section className="flex flex-col items-center relative justify-center
     bg-gray-950 py-16 gap-10">

            <SectionTitle id="timeline" title="Timeline" />
            <Timeline />
        </section>
    )
}