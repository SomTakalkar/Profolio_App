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
      <div className={`flip-inner ${isFlipped ? "flipped" : ""}`} style={{ minHeight: 260 }}>
        {/* Front Side */}
        <div className="flip-front flex flex-col items-center justify-center rounded-lg shadow-lg p-4 backdrop-blur-md bg-white/10 border border-white/30">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-32 object-cover rounded-md mb-4"
            draggable={false}
          />
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <button
            onClick={handleFlip}
            className="
              mt-2 px-4 py-2 rounded-md
              bg-white/70 text-black
              hover:bg-white/90 hover:text-black
              transition-colors duration-300
              font-medium shadow
              border border-white/40
            "
            type="button"
          >
            Details
          </button>
        </div>
        {/* Back Side */}
        <div className="flip-back flex flex-col items-center justify-center rounded-lg shadow-lg p-4 backdrop-blur-md bg-white/10 border border-white/30">
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
          <button
            onClick={handleFlip}
            className="
              mt-2 px-4 py-2 rounded-md
              bg-white/70 text-black
              hover:bg-white/90 hover:text-black
              transition-colors duration-300
              font-medium shadow
              border border-white/40
            "
            type="button"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
