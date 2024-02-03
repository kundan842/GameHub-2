import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App1() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // for mobile device ecah row has one col
          lg: `"nav nav" "aside main"`, // for large device
        }}
      >
        <GridItem area={"nav"} bg="orange">
          {" "}
          Nav
        </GridItem>
        <Show above="lg">
          {" "}
          <GridItem area={"aside"} bg="pink">
            Aside
          </GridItem>
        </Show>

        <GridItem area={"main"} bg="blue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App1;
