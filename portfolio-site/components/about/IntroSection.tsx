import ChatBox from "./ChatBox";
export default function IntroSection() {
    //background-image: linear-gradient(to right bottom, #020c12, #040910, #06060c, #060408, #040204, #050104, #050104, #060003, #090006, #0b010a, #0c020e, #0c0312)
    return (

        <section id="about" className="flex flex-col items-center min-h-[500px] sm:min-h-[100%] w-full flex-wrap relative mt-24 md:mt-0 justify-center">
            <ChatBox></ChatBox>
        </section>
    )
}