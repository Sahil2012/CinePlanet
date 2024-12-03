"use client";
import { Avatar, Box, Button, DropdownMenu, Link } from "@radix-ui/themes";
import LoginDialog from "../login-dialog";
import { signOut, useSession } from "next-auth/react";
import { getInitials } from "@/app/_lib/utils";
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
