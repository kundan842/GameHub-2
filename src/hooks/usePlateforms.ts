import { useQuery } from "@tanstack/react-query"
import useData, { FetchResponse } from "./useData"
import apiClient from "../servvices/api-client"

interface Plateform 
{
    id:number
    name:string
    slug:string
}

const usePlateforms = () =>

    useQuery({
        queryKey:['plateforms'],
        queryFn: () => apiClient.get<FetchResponse<Plateform>>('/plateforms/lists/parents')
                    .then(res => res.data),
        staleTime:24*60*60*1000 // 24h,
        // initialData:{results:[],}

    })
    


export default usePlateforms;