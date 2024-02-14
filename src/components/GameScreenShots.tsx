import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenshot";

interface Props {
  id: number;
}
const GameScreenShots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenShot(id);
  if (isLoading) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
