import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Plateform } from "../hooks/useGameS";
import GameCard from "./GameCard";
import LoadingSkelaton from "./LoadingSkelatoon";
import GameCardContainer from "./GameCardContainer";
import { Generes } from "../hooks/useGeneres";
import { GameQuery } from "../App";
interface Props {
  // selecteddGenere: Generes | null;
  // selectedPlateform: Plateform | null;
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skelatons = [1, 2, 3, 4, 5, 6, 7];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      marginTop={2}
      // padding="10px"
    >
      {isLoading &&
        skelatons.map((skelaton) => (
          <GameCardContainer>
            <LoadingSkelaton key={skelaton}></LoadingSkelaton>
          </GameCardContainer>
        ))}{" "}
      {data.map((game) => (
        <GameCardContainer>
          {" "}
          <GameCard key={game.id} game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
