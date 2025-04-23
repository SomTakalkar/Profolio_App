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
        <div>
          <p className="text-muted-foreground mb-4">
            A brief introduction about yourself. This could include your
            background, what you're passionate about, and your goals.
          </p>
          <p className="text-muted-foreground">
            Feel free to add more details about your experience and expertise.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

