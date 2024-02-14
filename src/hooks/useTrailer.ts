
import { useQuery } from "@tanstack/react-query"
import APIClient from "../servvices/api-client"
import { Trailer } from "../entities/Trailer"
const useTrailer  = (gameId: number) =>
{
    const client  =new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery(
        {
          queryKey: ['trailers', gameId],
          queryFn: client.getAll   
        }
    )
}

export default useTrailer;