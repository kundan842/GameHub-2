import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Generes } from "./useGeneres";
import { GameQuery } from "../App";

export interface Plateform
{
    id:number
    name:string
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:Plateform} []
    metacritic:number
    rating_top: number
  }

const useGames = (gamequery:GameQuery) => useData<Game>('/games', 
{params:{genres:gamequery.genere?.id, plateforms:gamequery.plateform?.id,
  ordering:gamequery.sortOrder,
  search:gamequery.searchText
}

},
 [gamequery])


export default useGames;