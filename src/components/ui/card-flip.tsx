"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  techStack: string;
  accentColor: string;
}

interface FlipCardProps {
  project: Project;
}

export const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="flip-card transform transition-transform duration-300 hover:scale-105"
      style={{ minHeight: 260 }}
    >
      <div
        className={`flip-inner ${isFlipped ? "flipped" : ""}`}
        style={{ minHeight: 260 }}
      >
        {/* Front Side */}
        <div
          className="flip-front flex flex-col items-center justify-center rounded-lg shadow-lg p-4 backdrop-blur-md bg-white/10 border-white/30 border"
          style={{
            // Optional: Add a light background color if needed
            // backgroundImage: `linear-gradient(to bottom right, #e0e7ff, #c7d2fe)`,
          }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-32 object-cover rounded-md mb-4"
            draggable={false}
          />
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <Button onClick={handleFlip} className="mt-2" variant="outline">
            Details
          </Button>
        </div>
        {/* Back Side */}
        <div
          className="flip-back flex flex-col items-center justify-center rounded-lg shadow-lg p-4 backdrop-blur-md bg-white/10 border-white/30 border"
          style={{
            // Optional: Add a light background color if needed
            // backgroundImage: `linear-gradient(to bottom right, #e0e7ff, #c7d2fe)`,
          }}
        >
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.description}</p>
          <p className="text-xs mb-4 opacity-80">{project.techStack}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 underline text-black"
          >
            View on GitHub
          </a>
          <Button onClick={handleFlip} className="mt-2" variant="secondary">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
