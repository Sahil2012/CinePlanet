import { Box } from "@radix-ui/themes";
import React from "react";
import { default as ReactMultiCarousel } from "react-multi-carousel";

const responsive = {
  lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 640, min: 400 },
    items: 2,
  },
  xxs: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

interface CarouselProps {
  children: React.ReactNode[];
  itemClassname?: string;
}

const Carousel = ({ children, itemClassname }: CarouselProps) => {
  return (
    <ReactMultiCarousel
      responsive={responsive}
      autoPlay={false}
      containerClass="carousel-container"
      partialVisible
      ssr={true}
      itemClass={"pr-8 " + itemClassname}
    >
      {children.map((child, index) => (
        <Box key={"#" + index}>
          {child}
        </Box>
      ))}
    </ReactMultiCarousel>
  );
};

export default Carousel;
