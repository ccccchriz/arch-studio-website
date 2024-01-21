import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
