"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const placeholderProjects = [
  {
    id: "1",
    title: "Project 1",
    description: "A brief description of Project 1.",
    imageUrl: "https://picsum.photos/400/200",
    link: "#",
  },
  {
    id: "2",
    title: "Project 2",
    description: "A brief description of Project 2.",
    imageUrl: "https://picsum.photos/400/200",
    link: "#",
  },
  {
    id: "3",
    title: "Project 3",
    description: "A brief description of Project 3.",
    imageUrl: "https://picsum.photos/400/200",
    link: "#",
  },
];

export function ProjectShowcase() {
  const [projects, setProjects] = useState(placeholderProjects);
  useEffect(() => {
    // Replace placeholderProjects with data fetching logic
    setProjects(placeholderProjects);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded-md mb-4"
            />
            <CardDescription>{project.description}</CardDescription>
            <Button asChild className="mt-4 w-full">
              <a href={project.link}>View Project</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
