import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../servvices/api-client";
import { FetchResponse } from "../servvices/api-client";
import { Plateform } from "./usePlateforms";



export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Plateform} []
    metacritic:number
    rating_top: number
  }

const useGames = (gamequery:GameQuery) =>
// useQuuery will fetch data of type FetchResponse and error of type Error
useQuery<FetchResponse<Game>, Error>({
  queryKey:['games', gamequery],
  queryFn: () => apiClient.get<FetchResponse<Game>>('/games',{
    params:
    {genres:gamequery.genere?.id, 
    plateforms:gamequery.plateform?.id,
    ordering:gamequery.sortOrder,
    search:gamequery.searchText
  }
  
  })
  .then(res => res.data)
})








export default useGames;