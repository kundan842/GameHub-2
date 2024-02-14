import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/Expandable";
import DetailItem from "../components/DetailItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
import GameAttributes from "../components/GameAttributes";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer id={game.id}></GameTrailer>
    </>
  );
};

export default GameDetails;
