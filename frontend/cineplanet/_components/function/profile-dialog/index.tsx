import { Box, Button, Dialog, Flex, Separator } from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import ProfileCard from "./ProfileCard";
import Wallet from "./Wallet";
import Bookings from "./Bookings";

interface ProfileDialogProps {
  trigger: ReactNode;
}

const ProfileDialog = ({ trigger }: ProfileDialogProps) => {
  const { data } = useSession();

  if (!data?.user) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title align="center" size="7">
          Hello, {data.user.name?.split(" ")[0]}
        </Dialog.Title>

        <Flex className="flex-col gap-3 pt-3 pb-5">
          <ProfileCard />
          <Box className="px-2 mt-2">
            <Wallet />
          </Box>
          <Flex justify="center" mb="2" >
            <Separator size="3" />
          </Flex>
          <Bookings />
        </Flex>
        <Box>
          <Button
            onClick={() => signOut()}
            color="red"
            className="!w-full"
            variant="surface"
            size="3"
          >
            Sign out
          </Button>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ProfileDialog;
