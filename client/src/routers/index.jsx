import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../pages/BaseLayout";
import HomePage from "../pages/HomePage";
import AddPokemon from "../pages/AddPokemon";
import PokemonDetail from "../pages/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-pokemon",
        element: <AddPokemon />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />,
      },
      {
        path: "/:type",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
