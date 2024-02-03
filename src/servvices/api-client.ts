import axios, { AxiosRequestConfig } from "axios"
export interface FetchResponse<T>
{
    count: number
    results: T[]
    next: string | null;
}

// api client to make request 

 const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'dd1c596d6ab24bb6909f27f7966dd259'
    }
})

class APIClient<T>
{
   endpoint : string
   constructor(endpoint: string)
   {
    this.endpoint = endpoint
   } 

   getAll = (config:AxiosRequestConfig) =>
   
    axiosInstance.get<FetchResponse<T>>(this.endpoint,config)
    .then(res => res.data)
   
}

export default APIClient;