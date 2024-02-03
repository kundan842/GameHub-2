import { useEffect, useState } from "react";
import APIClient from "../servvices/api-client";
import { CanceledError } from "axios";

import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../servvices/api-client";

const apiClient = new APIClient<Generes>('/genres')

export interface Generes
{
    id:number
    name:string
    slug: string
    image_background:string
}

const useGeneres = () =>  useQuery({
    queryKey:['generes'],
    queryFn: apiClient.getAll,
    staleTime:24*60*60*1000 // 24h
})


export default useGeneres;