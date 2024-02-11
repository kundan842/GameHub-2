import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  // all of the child component will have padding 0f 5
  return (
    <>
      <NavBar />

      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
