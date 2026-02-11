"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyYou from "@/components/WhyYou";
import Timeline from "@/components/Timeline";
import HeartCanvas from "@/components/HeartCanvas";
import VideoSection from "@/components/VideoSection";
import LoveLetter from "@/components/LoveLetter";
import SectionWrapper from "@/components/SectionWrapper";
import SecretPage from "@/components/SecretPage";



export default function Home() {
  const [currentSection, setCurrentSection] = useState("hero");

  return (
    <div className="min-h-screen bg-gradient-to-b from-romantic-900 to-black overflow-x-hidden overflow-y-auto">
      
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          
          {currentSection === "hero" && (
            <SectionWrapper key="hero">
              <Hero />
            </SectionWrapper>
          )}

          {currentSection === "videos" && (
            <SectionWrapper key="videos">
              <VideoSection />
            </SectionWrapper>
          )}

          {currentSection === "letter" && (
            <SectionWrapper key="letter">
              <LoveLetter />
            </SectionWrapper>
          )}
          {currentSection === "whyyou" && (
            <SectionWrapper key="whyyou">
              <WhyYou />
            </SectionWrapper>
          )}
          {currentSection === "timeline" && (
            <SectionWrapper key="timeline">
              <Timeline />
            </SectionWrapper>
          )}
          {currentSection === "secret" && (
            <SectionWrapper key="secret">
              <SecretPage />
            </SectionWrapper>
          )}
          {currentSection === "heart" && (
            <SectionWrapper key="heart">
              <HeartCanvas />
            </SectionWrapper>
          )}

        </AnimatePresence>
      </main>

    </div>
  );
}
