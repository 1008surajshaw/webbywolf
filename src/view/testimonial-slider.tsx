"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Bolt, Star, Shirt, Clock } from "lucide-react"
import user1 from "../../public/users/user1.png"
import user2 from "../../public/users/user2.png"
import user3 from "../../public/users/user5.png"
import user4 from "../../public/users/user6.png"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

const testimonials = [
  {
    icon: <Bolt className="h-10 w-10" />, // Increased icon size
    content:
      "Purus maecenas quis elit eu, aliquet. Nunc porttitor ut sollicitudin sit non rhoncus. Quam nunc vulputate senectus neque eget amet pharetra, accumed. Tempus, nunc, molestie imperdiet curabitur commodo vulputate.",
    name: "Jane Cooper",
    image: user1,
  },
  {
    icon: <Star className="h-10 w-10" />,
    content:
      "Vehicula sit sit pharetra lobortum ut mius accumsan. Durs, in metus, enim, ipsum morbi venenatis pellentesque. Mattis pharetra accumsan eget est mi euismod ut. Sit purus tortor eu tellus ros, id esuismod integer.",
    name: "Ralph Edwards",
    image: user2,
  },
  {
    icon: <Shirt className="h-10 w-10" />,
    content:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque fermentum consequat venerit libero. Ut sed tortor eu consequuntur dolor, nisi, aliquet ante laoreet.",
    name: "Courtney Henry",
    image: user3,
  },
  {
    icon: <Clock className="h-10 w-10" />,
    content:
      "Hendrerit augue ut ut quis velit netus, quis integer netus, ut rhoncus rhoncus habitant. Egestas arbot habitant tellus urtrices. Hendrerit ut netus viate praesent neque.",
    name: "Cameron Wilson",
    image: user4,
  },
]

export function TestimonialSlider() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white space-y-4 mb-12 text-center"
        >
          <span className="text-sm font-medium">Join other Sun harvesters</span>
          <h2 className="text-3xl md:text-4xl font-bold">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="max-w-2xl mx-auto">
            Dui euismod facilisis libero, aliquet vitae et elementum porttitor. Efficitur mi tristique condimentum
            congue fusce nunc, donec magna commodo.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3"> {/* Displays 3 per view */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white h-[350px] w-[380px] flex flex-col justify-between">
                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                      <div className="text-blue-600">{testimonial.icon}</div>
                      <p className="text-lg md:text-sm text-gray-600 flex-grow pt-6">{testimonial.content}</p>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-gray-200" />
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          {/* <AvatarFallback>CN</AvatarFallback> */}
                        </Avatar>

                        <span className="font-medium">{testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
