import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GeneresList from "../components/GeneresList";
import PlateformSelector from "../components/PlateformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"main"`, // for mobile device ecah row has one col
          lg: `"aside main"`, // for large device
        }}
        templateColumns={{
          // smaller or base device will have 1 column so will take entire space
          // largedevices will have 2 column , 1st column will take 200 px like side bar and 2nd column like main content will take entrire remoaning space
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          {" "}
          <GridItem area={"aside"} paddingX={5}>
            <GeneresList></GeneresList>
          </GridItem>
        </Show>

        <GridItem area={"main"} padding="20px">
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlateformSelector />
            <SortSelector></SortSelector>
          </HStack>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default HomePage;
