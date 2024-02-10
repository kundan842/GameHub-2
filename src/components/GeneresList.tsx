import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../servvices/image-utils";
import useGameQueryStore from "../store";

const GeneresList = () => {
  // here compoent depend on only generId, and renders only if generId chnages
  // so instead of destructing get speicific property
  const selectedGenereId = useGameQueryStore((s) => s.gameQuery.generId);
  const setelectedGenereId = useGameQueryStore((s) => s.setGenereid);
  const { data, isLoading, error } = useGeneres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom="5px">
        Genres
      </Heading>
      <List>
        {data?.results.map((genere) => (
          <ListItem
            key={genere.id}
            paddingY="5px"
            borderRadius={8}
            overflow="hidden"
          >
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genere.image_background)}
                objectFit="cover"
              />
              <Button
                fontWeight={selectedGenereId == genere.id ? "bold" : "normal"}
                onClick={() => setelectedGenereId(genere.id)}
                variant="Link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genere.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GeneresList;
