import ChatBox from "./ChatBox";

export default function IntroSection() {
    //background-image: linear-gradient(to right bottom, #020c12, #040910, #06060c, #060408, #040204, #050104, #050104, #060003, #090006, #0b010a, #0c020e, #0c0312)
    return (

        <section id="about" className="flex flex-col items-center justify-center min-h-[100vh] w-full">
            <ChatBox></ChatBox>
        </section>
    )
}