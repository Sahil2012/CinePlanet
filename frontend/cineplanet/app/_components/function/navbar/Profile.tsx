"use client";
import { Avatar, Button } from "@radix-ui/themes";
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState<Record<string, any>>(null);

  if (!user) {
    return (
      <Button
        // className="cursor-pointer"
        onClick={() => {
          setUser({
            name: "John Doe",
            email: "john.doe@example.com",
          });
        }}
      >
        Login
      </Button>
    );
  }

  return <Avatar fallback="HJ" radius="full" />;
};

export default Profile;
