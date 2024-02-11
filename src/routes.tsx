import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/games/:id", element: <GameDetails></GameDetails> },
    ],
  },
]);

export default router;
