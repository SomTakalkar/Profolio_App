"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";

const projectsData = [
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    description: "A simplified version of Instagram built with React.js, Vite, Firebase, and Chakra UI.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/instagram_clone.git",
    techStack: "React.js, Vite, Firebase, Chakra UI",
    borderColor: "border-purple-400",
    backgroundColor: "bg-purple-50",
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "A calculator app built with React.js to perform basic operations.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/calculator-app.git",
    techStack: "React.js",
    borderColor: "border-blue-400",
    backgroundColor: "bg-blue-50",
  },
  {
    id: "tic-tac-toe-ai",
    title: "Tic Tac Toe with AI",
    description: "An interactive Tic Tac Toe game with AI using Minimax and real-time backend.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/AI_TicTacToe.git",
    techStack: "Node.js, Socket.IO, React",
    borderColor: "border-green-400",
    backgroundColor: "bg-green-50",
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description: "A To-Do app for task management, built using JavaScript, CSS, and HTML.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/To-Do-List.git",
    techStack: "JavaScript, CSS, HTML",
    borderColor: "border-yellow-400",
    backgroundColor: "bg-yellow-50",
  },
  {
    id: "password-manager",
    title: "Password Manager",
    description: "A password manager with 2FA and Vault encryption using React and Node.js.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/Password_Manager",
    techStack: "React, Node.js, Vault",
    borderColor: "border-red-400",
    backgroundColor: "bg-red-50",
  },
];

export function ProjectShowcase() {
  const [projects, setProjects] = useState(projectsData);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    anime({
      targets: ".project-card",
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
      duration: 800,
      easing: "easeOutExpo",
    });

    // 3D hover effect
    cardRefs.current.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const dx = (x - rect.width / 2) / 20;
        const dy = (y - rect.height / 2) / 20;
        card.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
      });
    });
  }, []);

  return (
    <div className="relative p-6 min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#fef6f9] to-[#f1fcf4]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`project-card transform transition-transform duration-300 hover:shadow-xl border-2 ${project.borderColor} ${project.backgroundColor}`}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4" />
              <CardDescription>{project.description}</CardDescription>
              <p className="text-muted-foreground mt-2 text-sm">
                <b>Tech Stack:</b> {project.techStack}
              </p>
              <Button asChild className="mt-4 w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
