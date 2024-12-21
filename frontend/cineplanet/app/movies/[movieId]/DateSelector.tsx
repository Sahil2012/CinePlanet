"use client";

import { getToday, removeHours } from "@/_lib/utils";
import { Box, Flex, RadioCards, Text } from "@radix-ui/themes";
import { add, format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";

interface DateSelectorProps {
  date: number;
  movieId: string;
}

const DateSelector = ({ movieId, date: selectedDate }: DateSelectorProps) => {
  const params = useSearchParams();
  const router = useRouter();
  
  const today = removeHours(getToday());
  const week = [...Array(7).keys()].map((step) => add(today, { days: step }));

  const handleDateChange = (date: string) => {
    const searchParams = new URLSearchParams(params);
    
    const newDate = new Date(date);
    const formattedDate = format(newDate, "yyyy-MM-dd");
    searchParams.set("date", formattedDate);
    
    router.replace(`/movies/${movieId}?${searchParams.toString()}`);
  };
  
  return (
    <Box className="py-8">
      <RadioCards.Root
        size="2"
        defaultValue={new Date(selectedDate).toString()}
        columns="repeat(auto-fit, minmax(1rem, auto))"
        onValueChange={handleDateChange}
      >
        {week.map((day) => (
          <RadioCards.Item key={day.toISOString()} value={day.toString()}>
            <Flex
              direction="column"
              justify="center"
              align="center"
              className="px-1"
            >
              <Text size="1" color="gray" weight="bold">
                {format(day, "MMM").toUpperCase()}
              </Text>
              <Text size="5" weight="bold">
                {format(day, "dd")}
              </Text>
              <Text className="text-[0.65rem]" weight="bold" color="gray">
                {format(day, "EEE").toUpperCase()}
              </Text>
            </Flex>
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Box>
  );
};

export default DateSelector;
