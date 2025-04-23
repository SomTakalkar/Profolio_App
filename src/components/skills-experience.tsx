"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const placeholderSkills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Firebase",
  "Genkit",
];

const placeholderExperience = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Company",
    duration: "2020 - Present",
  },
  {
    id: "2",
    title: "Web Developer",
    company: "Another Company",
    duration: "2018 - 2020",
  },
];

export function SkillsExperience() {
  const [skills, setSkills] = useState(placeholderSkills);
  const [experience, setExperience] = useState(placeholderExperience);
  useEffect(() => {
    // Replace placeholderSkills and placeholderExperience with data fetching logic
    setSkills(placeholderSkills);
    setExperience(placeholderExperience);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {experience.map((exp) => (
              <li key={exp.id} className="mb-4">
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm">{exp.duration}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
