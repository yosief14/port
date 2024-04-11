
interface SectionTitleProps {
    title: string
    className?: string
    id?: string

}
export default function SectionTitle(props: SectionTitleProps) {
    console.log(props.title)
    return (

        <h1 id={props.id ? props.id : ""} className={`${props.className} text-nowrap font-pixel text-xl md:text-4xl lg:text-4xl bg-black py-4 px-20 rounded-2xl border-[#4A4D52] border-2 w-[319px] sm:w-fit text-center `}>
            {props.title}
        </h1>
    );
}