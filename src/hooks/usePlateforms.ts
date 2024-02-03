import useData from "./useData"

interface Plateform 
{
    id:number
    name:string
    slug:string
}

const usePlateforms = () =>
{
   return   useData<Plateform>('/platforms/lists/parents')
}

export default usePlateforms;