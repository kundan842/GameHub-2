import { BsChevronDown } from "react-icons/bs";
import { Plateform } from "../hooks/usePlateforms";
import usePlateforms from "../hooks/usePlateforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectPlateform: (plateform: Plateform) => void;
  selectedPalteformId?: number;
}
const PlateformSelector = ({
  onSelectPlateform,
  selectedPalteformId,
}: Props) => {
  // const {  data , error, isLoading} = usePlateforms();
  const { data, error, isLoading } = usePlateforms();
  const selectedPalteform = data?.results.find(
    (plateform) => plateform.id == selectedPalteformId
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPalteform?.name || "Plateforms"}
      </MenuButton>

      <MenuList>
        {data?.results.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => onSelectPlateform(plateform)}
            value={plateform.name}
          >
            {plateform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlateformSelector;
