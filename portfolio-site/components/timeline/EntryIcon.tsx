import Image from "next/image";
interface EntryIconProps {
    icon: string;
    color: string;
    mobile?: boolean;
}

export default function EntryIcon(props: EntryIconProps) {
    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-orange-500",
    ]
    const imagePath = `/timelineAssets/${props.icon}.svg`;
    return (
        <div className="bg-wihte sm:absolute sm:left-1/4">
            <Image src={imagePath} alt="icon" width={props.mobile ? 34 : 50} height={props.mobile ? 34 : 50} className={`bg-${props.color}-500 p-1 rounded-md h-fit `} />

        </div>
    );
}