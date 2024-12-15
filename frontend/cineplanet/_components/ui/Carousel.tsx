import { Box } from "@radix-ui/themes";
import React from "react";
import { default as ReactMultiCarousel } from "react-multi-carousel";

const responsive = {
  lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 50,
  },
  sm: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  xs: {
    breakpoint: { max: 640, min: 400 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  xxs: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
};

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel = ({ children }: CarouselProps) => {
  return (
    <ReactMultiCarousel
      responsive={responsive}
      autoPlay={false}
      containerClass="carousel-container"
      partialVisible
      className="-ml-3"
      ssr={true}
    >
      {children.map((child, index) => (
        <Box key={"#" + index} className="mx-3">
          {child}
        </Box>
      ))}
    </ReactMultiCarousel>
  );
};

export default Carousel;
