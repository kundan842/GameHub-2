import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

// to show 300 charcte and showmore button and show less button
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  // if childern is null then return null
  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;
  const text = expanded ? children : children.substring(0, 300) + "...";
  return (
    <Text>
      {text}
      <Button
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
