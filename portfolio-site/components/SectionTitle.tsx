
interface SectionTitleProps {
    title: string
    className?: string
    id?: string

}
export default function SectionTitle(props: SectionTitleProps) {
    console.log(props.title)
    return (

        <h1 className={`${props.className} font-pixel text-4xl bg-black py-4 px-20 rounded-2xl border-[#4A4D52] border-2  `}>
            {props.title}
        </h1>
    );
}