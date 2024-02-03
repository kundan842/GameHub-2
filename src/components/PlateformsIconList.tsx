import { Plateform } from "../hooks/useGameS";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface Props {
  plateforms: Plateform[];
}

const PlateFormIconList = ({ plateforms }: Props) => {
  // here defing icon map as obejct with value of type IconType from react icon
  // key will be string a[key:string] defines that any number of keys
  //no need to name keys here
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY="10px">
      {plateforms?.map((plateform) => (
        <Icon as={iconMap[plateform.slug]} color="gray.5000" />
      ))}
    </HStack>
  );
};
export default PlateFormIconList;
