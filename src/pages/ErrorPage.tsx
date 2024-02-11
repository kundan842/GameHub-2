import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>OOps</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This Page doesnt exits"
          : "some unexpected  errro occured"}
      </Text>
    </>
  );
};

export default ErrorPage;
