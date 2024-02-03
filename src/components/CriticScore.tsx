import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" marginRight="10px">
      {score}
    </Badge>
  );
};
export default CriticScore;
