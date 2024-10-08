import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGameS";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import LoadingSkelaton from "./LoadingSkelatoon";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skelatons = [1, 2, 3, 4, 5, 6, 7];
  if (error) return <Text>{error.message}</Text>;
  // heere in datalengt is not the no of items to be shown per page
  // its total data fetched till
  const totalFetchedGames =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={totalFetchedGames}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner></Spinner>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        marginTop={2}
        // padding="10px"
      >
        {isLoading &&
          skelatons.map((skelaton) => (
            <GameCardContainer>
              <LoadingSkelaton key={skelaton}></LoadingSkelaton>
            </GameCardContainer>
          ))}{" "}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer>
                {" "}
                <GameCard key={game.id} game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* <Button
        onClick={() => {
          console.log("has next page data", hasNextPage);
          fetchNextPage();
        }}
      >
        {isFetchingNextPage ? "Loading..." : "LoadMore"}
      </Button> */}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "LoadMore"}
        </Button>
      )}
    </InfiniteScroll>
  );
};

export default GameGrid;
