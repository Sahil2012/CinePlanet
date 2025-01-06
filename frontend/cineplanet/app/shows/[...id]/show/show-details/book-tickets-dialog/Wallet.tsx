import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

const Wallet = () => {
  return (
    <Card className="pl-4 pr-5">
      <Flex justify="between" align="center">
        <Flex className="flex-col">
          <Text size="5">Wallet Balance</Text>
        </Flex>
        <Flex className="items-start gap-1">
          <Text size="3" color="gray" className="mt-0.5">
            ₹
          </Text>
          <Text size="8">0.00</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Wallet;
