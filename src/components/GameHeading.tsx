import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGeneres";
import usePlateforms from "../hooks/usePlateforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // get data and rename it to genres
  const { data: generes } = useGeneres();
  const { data: plateforms } = usePlateforms();
  const selectedGenres = generes?.results.find(
    (gen) => gen.id == gameQuery.generId
  );
  const selectedPalteform = plateforms?.results.find(
    (plateform) => plateform.id == gameQuery.plateformId
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
