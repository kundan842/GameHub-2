import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlateforms from "../hooks/usePlateforms";
import useGameQueryStore from "../store";

const PlateformSelector = () => {
  // const {  data , error, isLoading} = usePlateforms();
  const { data, error, isLoading } = usePlateforms();
  const selectedPlateformId = useGameQueryStore((s) => s.gameQuery.plateformId);
  const selectedPalteform = data?.results.find(
    (plateform) => plateform.id == selectedPlateformId
  );
  const setSelectedPlateformId = useGameQueryStore((s) => s.setPlateformId);
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
            onClick={() => setSelectedPlateformId(plateform.id)}
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
