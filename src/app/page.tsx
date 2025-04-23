"use client";

import { useEffect, useRef } from "react";
import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsExperience } from "@/components/skills-experience";
import { AboutMe } from "@/components/about-me";
import anime from "animejs";

const logo = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="95" fill="#000" stroke="white" strokeWidth="10" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fill="white">
      Som 
    </text>
  </svg>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Splash screen animation
  useEffect(() => {
    const splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
      const logoElement = document.getElementById("logo");
      if (logoElement) {
        anime({
          targets: logoElement,
          scale: [0.8, 1.2, 1],
          opacity: [0, 1],
          duration: 2000,
          easing: "easeOutExpo",
        });
      }

      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = "block";
          anime({
            targets: splashScreen,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            complete: () => {
              splashScreen.remove();
            },
          });
        }
      }, 2000);
    }
  }, []);

  // Pointer follower animation
  useEffect(() => {
    const body = document.body;

    // Create trailing dots
    const dots: HTMLElement[] = [];
    const dotCount = 20;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.style.borderRadius = "50%";
      dot.style.background = "rgba(255, 255, 255, 0.7)";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "1";
      body.appendChild(dot);
      dots.push(dot);
    }

    let mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const animateDots = () => {
      let x = mouse.x;
      let y = mouse.y;

      dots.forEach((dot, index) => {
        setTimeout(() => {
          dot.style.left = x + "px";
          dot.style.top = y + "px";
        }, index * 15);
        x += (mouse.x - x) * 0.2;
        y += (mouse.y - y) * 0.2;
      });

      requestAnimationFrame(animateDots);
    };

    animateDots();

    return () => {
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "skills"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: "easeOutExpo",
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }, []);

  return (
    <>
      <div
        id="splash-screen"
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black"
      >
        <div id="logo" className="text-white text-center text-6xl font-bold">
          {logo}
        </div>
      </div>
      {/* Stylish Gradient Background */}
      <div
        id="bgWave"
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        }}
      />
      <div
        ref={containerRef}
        style={{ display: "none" }}
        className="container mx-auto py-10"
      >
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white">About Me</h2>
          <AboutMe />
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
          <ProjectShowcase />
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white">Skills &amp; Experience</h2>
          <SkillsExperience />
        </section>
      </div>
    </>
  );
}
