import { getInitials } from "@/app/_lib/utils";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React from "react";

const ProfileCard = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Card className="w-full">
      <Flex gap="3" align="center">
        <Avatar
          referrerPolicy="no-referrer"
          size="4"
          className="hover:cursor-pointer"
          src={session?.user?.image ?? undefined}
          fallback={
            <Box className="!text-sm !font-extrabold">
              {getInitials(session?.user?.name)}
            </Box>
          }
          radius="full"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            {session?.user?.name}
          </Text>
          <Text as="div" size="2" color="gray">
            {session?.user?.email}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default ProfileCard;
