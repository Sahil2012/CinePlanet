import UserService from "@/_services/UserService";
import { Card, Flex, Spinner, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Wallet = () => {
  const { data: walletBalance, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: () => UserService.getWalletBalance(),
  });

  if (isLoading) {
    return (
      <Card className="pl-4 pr-5">
        <Flex align="center" justify="center">
          <Spinner size="2" />
        </Flex>
      </Card>
    );
  }

  let balance = "--";
  if (walletBalance) {
    balance = `${walletBalance.rupees}.${walletBalance.paise % 100}`;
  }

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
          <Text size="8">{balance}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Wallet;
