import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/GameGrid";
import GeneresList from "./components/GeneresList";
import { useState } from "react";
import { Generes } from "./hooks/useGeneres";
import PlateformSelector from "./components/PlateformSelector";
import { Plateform } from "./hooks/useGameS";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genere: Generes | null;
  plateform: Plateform | null;
  sortOrder: string | null;
  searchText: string | null;
}
function App() {
  // const [selectdGenere, setSelecetdGenere] = useState<Generes | null>(null);
  // const [selctedPlateform, setSelectedplateform] = useState<Plateform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // for mobile device ecah row has one col
          lg: `"nav nav" "aside main"`, // for large device
        }}
        templateColumns={{
          // smaller or base device will have 1 column so will take entire space
          // largedevices will have 2 column , 1st column will take 200 px like side bar and 2nd column like main content will take entrire remoaning space
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"} paddingX={5}>
            <GeneresList
              selectedGenere={gameQuery.genere}
              onSelectGenere={(genere: Generes) => {
                setGameQuery({ ...gameQuery, genere });
                console.log("selected genre", genere);
              }}
            ></GeneresList>
          </GridItem>
        </Show>

        <GridItem area={"main"} padding="20px">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlateformSelector
              selectedPalteform={gameQuery.plateform}
              onSelectPlateform={(plateform: Plateform) =>
                setGameQuery({ ...gameQuery, plateform })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            ></SortSelector>
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
