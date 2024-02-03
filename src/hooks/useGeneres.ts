import { useEffect, useState } from "react";
import apiClient from "../servvices/api-client";
import { CanceledError } from "axios";

import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../servvices/api-client";

export interface Generes
{
    id:number
    name:string
    slug: string
    image_background:string
}

const useGeneres = () =>  useQuery({
    queryKey:['generes'],
    queryFn: () => apiClient.get<FetchResponse<Generes>>('/genres')
                .then(res => res.data),
    staleTime:24*60*60*1000 // 24h
})


export default useGeneres;