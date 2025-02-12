"use client"

import { CircleUser } from "lucide-react"
import { SectionLayout } from "@/layouts/section-layout"
import menSmiling from "../../public/page3/men_smiling.png"
const features = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
  },
]

export function FeaturesSection() {
  return (
    <SectionLayout
      title="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT."
      description="Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra varius suspendisse ornare."
      image={menSmiling} // Replace with your local image path
      imageAlt="People discussing features"
      
    >
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-4">
            <CircleUser className="h-6 w-6 text-primary flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

