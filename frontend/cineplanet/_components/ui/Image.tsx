import React from "react";
import NextImage from "next/image";
import { Box } from "@radix-ui/themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageProps {
  img: string | StaticImport | undefined;
  alt: string;
}

const Image = ({ img, alt }: ImageProps) => {
  if (!img) {
    return <Box>Y</Box>;
  }

  return (
    <NextImage
      src={img}
      alt={alt}
      className="object-cover h-full"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default Image;
