import axios from "axios"
export interface FetchResponse<T>
{
    count: number
    results: T[]
}

// api client to make request 

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'dd1c596d6ab24bb6909f27f7966dd259'
    }
})