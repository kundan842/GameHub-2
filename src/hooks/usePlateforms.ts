import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../servvices/api-client"


const apiClient = new APIClient<Plateform>('/platforms/lists/parents')
export interface Plateform 
{
    id:number
    name:string
    slug:string
}

const usePlateforms = () =>

    useQuery({
        queryKey:['plateforms'],
        queryFn: apiClient.getAll,
        staleTime:24*60*60*1000 // 24h,
        // initialData:{results:[],}

    })
    


export default usePlateforms;