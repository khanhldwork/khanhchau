import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize() {
  // Mảng chứa các đường dẫn ảnh
  const imageUrls = [
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740504936/257A6768_olhw6i.jpg",
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740545302/257A6816_x5rdhe.jpg",
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740545301/257A6916_ho3o8s.jpg",
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740545300/257A6936_sjmqcq.jpg",
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740504985/257A7142_hg6s9k.jpg",
    "https://res.cloudinary.com/dpufemrnq/image/upload/v1740504939/257A6748_ohrqsm.jpg"
    // Thêm các đường dẫn ảnh khác tại đây
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[48%]"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2.5">
                  <Image
                    className="w-full"
                    src={url}
                    width={200}
                    height={300}
                    alt={`Image ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}