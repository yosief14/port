import IntroSection from "@/components/about/IntroSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectSection from "@/components/projects/ProjectSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  // TODO add local font to the project
  //TODO: add contact section

  return (
    <main className="flex min-h-[80vh]  flex-col items-center justify-center
    bg-zinc-950 pt-16">
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <ToolsSection></ToolsSection>
      <ProjectSection></ProjectSection>
      <TimelineSection></TimelineSection>
    </main>
  );
}