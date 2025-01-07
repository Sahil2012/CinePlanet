import UserService from "@/_services/UserService";
import { Box, Button, Callout, Flex, Spinner, Text } from "@radix-ui/themes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "next-auth";
import { useState } from "react";
import { MdCheckCircle, MdError } from "react-icons/md";

interface WalletProps {
  user: User;
}

const Wallet = ({ user }: WalletProps) => {
  const [showToast, setShowToast] = useState(false);
  const { data: walletBalance, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: () => UserService.getWalletBalance(),
  });

  const {
    isPending,
    isSuccess,
    mutate: executeAddMoneyMutation,
  } = useMutation({
    mutationFn: () =>
      UserService.addMoney({
        rupees: 1000,
        paise: 0,
      }),
    onSettled: () => {
      showToastMessage();
    }
  });

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleAddMoney = () => {
    executeAddMoneyMutation();
  };

  if (isLoading) {
    return (
      <Flex align="center" justify="center">
        <Spinner size="2" />
      </Flex>
    );
  }

  let balance = "--";
  if (walletBalance) {
    balance = `${walletBalance.rupees}.${walletBalance.paise % 100}`;
  }

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
          <Text size="8">{balance}</Text>
        </Flex>
      </Flex>
      <Button loading={isPending} onClick={handleAddMoney}>
        Add Money
      </Button>
      {showToast && (
        <Box className="fixed left-0 top-5 w-screen flex justify-center">
          <Callout.Root color="gray" variant="soft" highContrast>
            <Callout.Icon>
              {isSuccess ? <MdCheckCircle /> : <MdError />}
            </Callout.Icon>
            <Callout.Text>
              {isSuccess
                ? "Successfully added money to the wallet"
                : "Some error occured. Please try again later"}
            </Callout.Text>
          </Callout.Root>
        </Box>
      )}
    </Flex>
  );
};

export default Wallet;
