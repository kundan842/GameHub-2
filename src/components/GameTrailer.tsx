import useGame from "../hooks/useGame";
import useTrailer from "../hooks/useTrailer";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailer(id);
  //   console.log("game id", id);
  console.log("game data for gameid: ", data);

  const first_obj = data?.results[0];
  return first_obj ? (
    <video
      src={first_obj?.data?.[480]}
      poster={first_obj?.preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;
