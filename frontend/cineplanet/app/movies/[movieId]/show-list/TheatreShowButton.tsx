"use client";

import { Show } from "@/_services/ShowService";
import { Button, Flex, Text } from "@radix-ui/themes";
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
      variant="outline"
      size="3"
      className="py-2 px-5 !h-auto"
      onClick={() => {
        router.push(`/shows/${show.id}/${show.theatreId}`);
        router.refresh();
      }}
    >
      <Flex direction="column" justify="center" align="center">
        <Text size="3" weight="bold">
          {getTime(show.timestamp)}
        </Text>
        <Text color="gray" className="text-[0.65rem]">
          {show.language}
        </Text>
      </Flex>
    </Button>
  );
};

export default TheatreShowButton;
