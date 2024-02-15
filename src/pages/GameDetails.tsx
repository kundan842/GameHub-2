import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/Expandable";
import DetailItem from "../components/DetailItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenShots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <GridItem>
        {" "}
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id}></GameTrailer>
        <GameScreenShots id={game.id}></GameScreenShots>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
