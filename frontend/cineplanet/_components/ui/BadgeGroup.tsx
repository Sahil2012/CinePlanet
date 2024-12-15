import { Badge, Flex } from "@radix-ui/themes";
import React from "react";
import { MdCancel } from "react-icons/md";

interface BadgeGroupProps {
  values: string[];
  onCancel: (value: string) => void;
}

const BadgeGroup = ({ values, onCancel }: BadgeGroupProps) => {
  return (
    <Flex gap="3">
      {values.map((value) => (
        <Badge key={value} size="3">
          {value}
          <MdCancel
            className="hover:cursor-pointer"
            onClick={() => onCancel(value)}
          />
        </Badge>
      ))}
    </Flex>
  );
};

export default BadgeGroup;
