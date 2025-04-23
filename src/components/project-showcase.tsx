"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    description:
      "A simplified version of Instagram built with React.js, vite, Firebase, and Chakra UI.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/instagram_clone.git",    
    techStack: "React.js, Vite, Firebase, Chakra UI",
    accentColor: "from-purple-400 to-purple-600",
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A functional calculator made using React.js.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/calculator-app.git",
    techStack: "React.js",
    accentColor: "from-blue-400 to-blue-600",
  },
  {
    id: "tic-tac-toe-ai",
    title: "Tic Tac Toe with AI",
    description:
      "An interactive Tic Tac Toe game with AI using Minimax and real-time backend.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/AI_TicTacToe.git",
    techStack: "Node.js, Socket.IO, React",
    accentColor: "from-green-400 to-green-600",
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description:
      "A To-Do app for task management, built using JavaScript, CSS, and HTML.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/To-Do-List.git",
    techStack: "JavaScript, CSS, HTML",
    accentColor: "from-yellow-400 to-yellow-600",
  },
  {
    id: "password-manager",
    title: "Password Manager",
    description:
      "A password manager with 2FA and Vault encryption using React and Node.js.",
    imageUrl: "https://picsum.photos/400/200",
    link: "https://github.com/SomTakalkar/Password_Manager",    
    techStack: "React, Node.js, Vault",
    accentColor: "from-red-400 to-red-600",
  },  
];

import { FlipCard } from "@/components/ui/card-flip";

export function ProjectShowcase() {
  const [projects, setProjects] = useState(projectsData);
  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-float-slow">
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }
        
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flipped {
          transform: rotateY(180deg);
        }
        
        .flip-front,
        .flip-back{
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-front{
            background-color: transparent;
            color: black;
            z-index: 2;
        }
        
        .flip-back {
          background-color: transparent;
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>
    
      {projects.map((project, index) => (
        <FlipCard key={project.id} project={project} />
      ))}
    </div>
  );
}

