"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AboutMe() {
    return (
        <Card className="bg-white/30 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="flex flex-col md:flex-row gap-6">
        <Avatar className="w-32 h-32 mx-auto md:mx-0">
          <AvatarImage src="https://picsum.photos/400/400" alt="Your Name" />
          <AvatarFallback>Name</AvatarFallback>
        </Avatar>
        <div className="text-muted-foreground">
          <p className="text-gray-800">
          I am a Final Year Electronics and Computer Engineering student at Maharashtra Institute of Technology with a
strong interest in Cybersecurity, Computer Networks, and new global trends. I thrive in team environments and
am committed to continual personal and professional growth through academic projects and practical coursework.
I also enjoy learning from others and have diverse interests, including exercising, gardening, and trekking
          </p>

        </div>
            </CardContent>
        </Card>
    );
}

