import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const LoadingSkelaton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        {/* we had heading so will head simiae elelment */}
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default LoadingSkelaton;
