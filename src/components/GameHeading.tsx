import { Heading } from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import usePlateforms from "../hooks/usePlateforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  // get data and rename it to genres
  const { data: generes } = useGeneres();
  const { data: plateforms } = usePlateforms();
  const selectedGneredId = useGameQueryStore((s) => s.gameQuery.generId);
  const selectedPlateformId = useGameQueryStore((s) => s.gameQuery.plateformId);
  const selectedGenres = generes?.results.find(
    (gen) => gen.id == selectedGneredId
  );
  const selectedPalteform = plateforms?.results.find(
    (plateform) => plateform.id == selectedPlateformId
  );
  const gameHeading = `${selectedPalteform?.name || ""} ${
    selectedGenres?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
