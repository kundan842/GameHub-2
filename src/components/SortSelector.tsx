import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const orderlist = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = orderlist.find(
    (order) => order.value == selectedSortOrder
  );

  const setSortOrder = useGameQueryStore((S) => S.setSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {orderlist.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => setSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
