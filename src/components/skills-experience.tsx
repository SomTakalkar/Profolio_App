"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import Link from "next/link";

// Data
const skillsData = [
  { category: "Technical Skills", items: ["HTML", "CSS", "JavaScript", "Python", "SQL", "C"] },
  { category: "Frameworks", items: ["Flask", "Django"] },
  { category: "Cybersecurity", items: ["Computer Networks", "Linux (Ubuntu, Redhat, Kali)"] },
  {
    category: "Tools",
    items: ["OpenShift AI (AI267)", "WireShark", "Nmap", "VMware", "VirtualBox", "Firebase"],
  },
];

const educationData = [
  {
    id: "btech",
    title: "B.TECH in Electronics and Computer Engineering",
    institute: "Maharashtra Institute of Technology, Chhatrapati Sambhaji Nagar",
    duration: "2021-2025",
    details: "6th Semester CGPA: 7.51",
  },
  {
    id: "hsc",
    title: "Higher Secondary Certificate (HSC)",
    institute: "Deogiri Junior College, Chhatrapati Sambhaji Nagar",
    duration: "2019 - 2021",
    details: "Percentage: 83.83%",
  },
  {
    id: "ssc",
    title: "Secondary School Certificate (SSC)",
    institute: "Jain International School, Chhatrapati Sambhaji Nagar",
    duration: "2018 - 2019",
    details: "Percentage: 70%",
  },
];

const certificationsData = [
  { name: "Google-Coursera, HackerRank, IBM-Coursera" },
  {
    name: "Badges Credly: (Google Cloud, Redhat)",
    link: "https://www.credly.com/users/som-takalkar",
  },
  {
    name: "NPTEL Certification in Ethical Hacking",
    link: "https://drive.google.com/file/d/1IXRTjKD3lGcVArcqzT5Ek4pnoVIkMq-p/view?usp=drive_link",
  },
];

const skillProgressData = [
  { skill: "HTML", progress: 90 },
  { skill: "CSS", progress: 80 },
  { skill: "JavaScript", progress: 75 },
  { skill: "Python", progress: 85 },
  { skill: "SQL", progress: 70 },
  { skill: "C", progress: 60 },
  { skill: "Linux", progress: 80 },
];

export function SkillsExperience() {
  const skillsCardRef = useRef(null);
  const educationCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: skillsCardRef.current,
      rotateY: [90, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
    });

    anime({
      targets: educationCardRef.current,
      rotateY: [-90, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
      delay: 200,
    });
  }, []);

  useEffect(() => {
    skillProgressData.forEach((data) => {
      const progressBar = document.getElementById(`progress-bar-${data.skill}`);
      if (progressBar) {
        anime({
          targets: progressBar,
          width: `${data.progress}%`,
          backgroundColor: ["#e2e8f0", "#a78bfa"],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      }
    });
  }, []);

  return (
    <div className="relative z-10">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-400 opacity-20 rounded-full mix-blend-lighten animate-float-slow blur-3xl top-[10%] left-[10%]" />
        <div className="absolute w-96 h-96 bg-pink-400 opacity-20 rounded-full mix-blend-lighten animate-float-medium blur-3xl top-[50%] left-[60%]" />
        <div className="absolute w-64 h-64 bg-blue-400 opacity-20 rounded-full mix-blend-lighten animate-float-fast blur-3xl top-[30%] left-[80%]" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {/* Skills Card */}
        <Card className="backdrop-blur-md bg-white/10 border-white/30 border" ref={skillsCardRef}>
          <CardHeader>
            <CardTitle className="text-white">Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-white">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-semibold">{skillGroup.category}:</h4>
                {skillGroup.category === "Technical Skills" ? (
                  <div className="flex flex-col gap-2 mt-2">
                    {skillProgressData.map((skillData) => (
                      <div key={skillData.skill} className="flex items-center gap-2">
                        <span className="w-20 text-right">{skillData.skill}:</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div
                            id={`progress-bar-${skillData.skill}`}
                            className="h-full bg-purple-400"
                            style={{ width: 0 }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education & Certifications Card */}
        <Card className="backdrop-blur-md bg-white/10 border-white/30 border text-white" ref={educationCardRef}>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {educationData.map((edu) => (
                <li key={edu.id} className="mb-4">
                  <h3 className="font-semibold">{edu.title}</h3>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-sm">{edu.duration}</p>
                  <p className="text-sm">{edu.details}</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardHeader>
            <CardTitle>Certifications and Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {certificationsData.map((cert, index) => (
                <li key={index} className="mb-2">
                  {cert.link ? (
                    <Link
                      href={cert.link}
                      className="underline text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.name}
                    </Link>
                  ) : (
                    <p>{cert.name}</p>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
