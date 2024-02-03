import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeneres, { Generes } from "../hooks/useGeneres";
import getCroppedImageUrl from "../servvices/image-utils";

interface Props {
  onSelectGenere: (genere: Generes) => void;
  selectedGenere: null | Generes;
}
const GeneresList = ({ onSelectGenere, selectedGenere }: Props) => {
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
                fontWeight={selectedGenere?.id == genere.id ? "bold" : "normal"}
                onClick={() => onSelectGenere(genere)}
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
