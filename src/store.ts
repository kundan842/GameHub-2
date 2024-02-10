
import { create } from "zustand"
interface GameQuery {
    generId?: number;
    plateformId?: number;
    sortOrder?: string | null;
    searchText?: string | null;
  }


  interface GameQueryStore
  {
    gameQuery:GameQuery
    setSearchtext: (text:string) => void
    setGenereid : (id:number) => void
    setPlateformId:(plateformId:number) => void
    setSortOrder:(oredr: string) => void

  }
const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery:{},
    setSearchtext: (searchText) => set(() => ({gameQuery:{searchText}})),
    setGenereid : (generId) => set((store) => ({gameQuery:{...store.gameQuery, generId}})),
    setPlateformId: (plateformId) => set((store) => ({gameQuery:{...store.gameQuery, plateformId}})),
    setSortOrder:(sortOrder) => set((store) =>  ({gameQuery:{...store.gameQuery, sortOrder }}))
}))

export default useGameQueryStore;
//   setGenereid : (generId) => set((store) => ({gameQuery:{...store.gameQuery, generId}}))
// store => eariler state and reurns the final state

  

  

  