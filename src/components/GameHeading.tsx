import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const gameHeading = `${gameQuery.plateform?.name || ""} ${
    gameQuery.genere?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5}>
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
