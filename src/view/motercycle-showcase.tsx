"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { SectionLayout } from "@/layouts/section-layout";
import motercycleShowcase from "../../public/page2/motercycleshowcase.png";
import helmetsmile from "../../public/page2/helmetsmile.png";
import handshake1 from "../../public/page2/handshake1.png";
import handshake2 from "../../public/page2/handshake2.png";

interface ShowcaseItem {
  image: StaticImageData; // Updated to StaticImageData
  title: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    image: helmetsmile, // Directly use the imported image
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Vestibulum ornare fermentum feugiat.",
  },
  {
    image: handshake1, // Directly use the imported image
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    image: handshake2, // Directly use the imported image
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export function MotorcycleShowcase() {
  return (
    <SectionLayout
      title="LOREM IPSUM DOLOR SIT AMET"
      description="Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis erat. Ad porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi luctus a felis aliquiet. Hendrerit tellus at purus lectus."
      image={motercycleShowcase} // Use the imported image directly
      imageAlt="Colorful motorcycles lineup"
    >
      <div className="space-y-6">
        {showcaseItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <Image
                src={item.image} // Use the image directly
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}

        <div className="flex items-center space-x-4 pt-4">
          <Button className="bg-primary text-white">
            Lorem Ipsum
            <span className="ml-2">→</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-medium">12345678</span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}