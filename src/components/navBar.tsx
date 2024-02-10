import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./ColoModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <SwitchColorMode></SwitchColorMode>
    </HStack>
  );
};

export default NavBar;
