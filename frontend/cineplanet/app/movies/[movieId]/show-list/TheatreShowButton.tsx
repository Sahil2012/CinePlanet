"use client";

import { Show } from "@/_services/ShowService";
import { Button } from "@radix-ui/themes";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

const getTime = (timestamp: number) => {
  const date = new Date(timestamp);
  return format(date, "hh:mm aa");
};

interface TheatreShowButtonProps {
  show: Show;
}

const TheatreShowButton = ({ show }: TheatreShowButtonProps) => {
  const router = useRouter();

  return (
    <Button
      key={show.id}
      variant="surface"
      onClick={() => {
        router.push(`/shows/${show.id}/${show.theatreId}`);
        router.refresh();
      }}
    >
      {getTime(show.timestamp)}
    </Button>
  );
};

export default TheatreShowButton;
