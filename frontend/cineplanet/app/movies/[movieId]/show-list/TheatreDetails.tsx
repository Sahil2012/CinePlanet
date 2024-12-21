import { Heading } from "@radix-ui/themes";
import React from "react";

interface TheatreDetailsProps {
  theatreName: string;
}

const TheatreDetails = ({ theatreName }: TheatreDetailsProps) => {
  return (
    <Heading as="h3" size="5" className="py-5">
      {theatreName}
    </Heading>
  );
};

export default TheatreDetails;
