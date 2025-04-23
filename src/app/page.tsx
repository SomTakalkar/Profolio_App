"use client";

import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsExperience } from "@/components/skills-experience";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ProjectShowcase />
      </section>

      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Skills &amp; Experience</h2>
        <SkillsExperience />
      </section>
    </div>
  );
}
