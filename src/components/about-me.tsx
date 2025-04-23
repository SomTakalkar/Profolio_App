"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AboutMe() {
  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row gap-6">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://picsum.photos/400/400" alt="Your Name" />
          <AvatarFallback>Name</AvatarFallback>
        </Avatar>
        <div className="text-muted-foreground">
          <p className="mb-4">
            I am Som Takalkar, a Final Year Electronics and Computer Engineering
            student at Maharashtra Institute of Technology.
            I have a strong interest in Cybersecurity, Computer Networks, and
            exploring new global trends.
          </p>
          <p className="mb-4">
            My technical skills include HTML, CSS, JavaScript, Python, SQL, and
            C. I've also earned certifications from Google-Coursera, HackerRank,
            and IBM-Coursera.
          </p>
          <p>I thrive in team environments and am passionate about continual learning.</p>

        </div>
      </CardContent>
    </Card>
  );
}

