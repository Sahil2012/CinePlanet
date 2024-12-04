"use client";
import { getInitials } from "@/_lib/utils";
import { Avatar, Box, Button, Link } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import LoginDialog from "../login-dialog";
import ProfileDialog from "../profile-dialog";

const Profile = () => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated" || status === "loading") {
    return (
      <LoginDialog
        trigger={<Button loading={status === "loading"}>Login</Button>}
      />
    );
  }

  return (
    <ProfileDialog
      trigger={
        <Link>
          <Avatar
            className="hover:cursor-pointer"
            src={session?.user?.image ?? undefined}
            referrerPolicy="no-referrer"
            fallback={
              <Box className="!text-sm !font-extrabold">
                {getInitials(session?.user?.name)}
              </Box>
            }
            size="3"
            radius="full"
          />
        </Link>
      }
    />
  );
};

export default Profile;
