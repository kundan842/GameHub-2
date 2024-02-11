// this will take each game object as props and return car markup

import { Card, CardBody, HStack, Heading, Hide, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { Plateform } from "../entities/Plateform";
import PlateFormIconList from "./PlateformsIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../servvices/image-utils";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlateFormIconList
            plateforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};

export default GameCard;
