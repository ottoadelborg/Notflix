import Home from "./Views/Home";
import Categories from "./Views/Categories";
import Bookmarks from "./Views/Bookmarks";
import FilmView from "./Views/Film-view";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "Notflix/",
      element: <Home />,
    },

    {
      path: "Notflix/categories",
      element: <Categories />,
    },

    {
      path: "Notflix/bookmarks",
      element: <Bookmarks />,
    },

    {
      path: "Notflix/film-view",
      element: <FilmView />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
