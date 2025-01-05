import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

const Wallet = () => {
  return (
    <Flex justify="between" align="center">
      <Flex className="flex-col">
        <Text size="1" color="gray">
          Wallet Balance
        </Text>
        <Flex className="items-start gap-1">
          <Text size="3" color="gray" className="mt-0.5">
            ₹
          </Text>
          <Text size="8">0.00</Text>
        </Flex>
      </Flex>
      <Button>Add Money</Button>
    </Flex>
  );
};

export default Wallet;
