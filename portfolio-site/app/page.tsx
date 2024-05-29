"use client"
import IntroSection from "@/components/about/IntroSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectSection from "@/components/projects/ProjectSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import LinkSection from "@/components/links/LinkSection";

export default function Home() {
  //TODO: add contact section
  //TODO: add fade in for page components
  const mainRef = React.useRef(null);
  return (

    <main className="flex h-[100vh] flex-col items-center   gap-20
    bg-[linear-gradient(to_bottom,#020c12,#040910,#06060c,#060408,#040204,#050104,#050104,#060003,#090006,#0b010a,#0c020e,#0c0312)]
    bg-scroll overflow-y-auto overflow-x-hidden"
      ref={mainRef}>
      <Navbar containerRef={mainRef}></Navbar>
      <IntroSection></IntroSection>
      <ToolsSection></ToolsSection>
      <ProjectSection></ProjectSection>
      <TimelineSection></TimelineSection>
      <LinkSection />
    </main>

  );
}