import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../servvices/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";




const apiClient = new APIClient<Game>('/games')
const useGames = () =>{
  const  gamequery = useGameQueryStore( s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:['games', gamequery],
    queryFn: ( {pageParam = 1 }) => apiClient.getAll({
      params:
      {genres:gamequery.generId, 
      plateforms:gamequery.plateformId,
      ordering:gamequery.sortOrder,
      search:gamequery.searchText,
      page:pageParam
    }
    
    }),
    getNextPageParam:(lastpage,allPages) =>
    {
      lastpage.next ?  allPages.length+1 : undefined
    }
  
  
  }
    
  )

}
// useQuuery will fetch data of type FetchResponse and error of type Error









export default useGames;