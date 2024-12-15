import Logo from "@/_assets/cine-planet-logo.png";
import LogoText from "@/_assets/cine-planet.png";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Profile from "./Profile";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="h-full py-5 flex justify-between items-center">
      <Flex gap="4" align="center" className="h-full">
        <Link href="/" className="h-full">
          <Image src={Logo} className="h-full w-auto" alt="CinePlanet Logo" />
        </Link>
        <Link href="/" className="h-full">
          <Image
            src={LogoText}
            className="h-full w-auto py-2"
            alt="CinePlanet Logo Text"
          />
        </Link>
      </Flex>
      <Flex>
        <Profile />
      </Flex>
    </header>
  );
};

export default NavBar;
