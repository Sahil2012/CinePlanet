import { Box, Flex, Text } from "@radix-ui/themes";
import Logo from "@/app/_assets/cine-planet-logo.png";
import LogoText from "@/app/_assets/cine-planet.png";
import Image from "next/image";
import React from "react";
import Profile from "./Profile";

const NavBar = () => {
  return (
    <header className="h-16 py-3 flex justify-between items-center">
      <Flex gap="4" align="center" className="h-full">
        <Image src={Logo} className="h-full w-auto" alt="CinePlanet Logo" />
        <Image
          src={LogoText}
          className="h-full w-auto py-2"
          alt="CinePlanet Logo Text"
        />
      </Flex>
      <Flex>
        <Profile />
      </Flex>
    </header>
  );
};

export default NavBar;
