import { Generes } from "./Generes";
import { Plateform } from "./Plateform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Plateform; }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  genres: Generes []
  publishers: Publisher[]

}
