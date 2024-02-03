import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./ColoModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <SwitchColorMode></SwitchColorMode>
    </HStack>
  );
};

export default NavBar;
