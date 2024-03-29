import SectionTitle from "../SectionTitle"
import Timeline from "./Timeline"
export default function TimelineSection() {
    //bg-[linear-gradient(to_right_bottom,#0a1114,#0a0e12,#0a0b0e,#08070a,#050405,#050305,#050104,#060003,#090006,#0b010a,#0c020e,#0c0312)] py-16 gap-10 w-full
    return (
        <section className="flex flex-col items-center justify-center
     ">

            <SectionTitle id="timeline" title="Timeline" />
            <Timeline />
        </section>
    )
}