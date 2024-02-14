import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DetailItem from "./DetailItem";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DetailItem term="Plateforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DetailItem>
      <DetailItem term="MetaScore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DetailItem>
      <DetailItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DetailItem>
      <DetailItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DetailItem>
    </SimpleGrid>
  );
};
export default GameAttributes;
