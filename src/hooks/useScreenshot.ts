
import { useQuery } from "@tanstack/react-query"
import APIClient from "../servvices/api-client"
import { ScreenShot } from "../entities/Screenshot"
const useScreenShot  = (gameId: number) =>
{
    const client  =new APIClient<ScreenShot>(`games/${gameId}/screenshots`)
    return useQuery(
        {
          queryKey: ['screenshots', gameId],
          queryFn: client.getAll   
        }
    )
}

export default useScreenShot;