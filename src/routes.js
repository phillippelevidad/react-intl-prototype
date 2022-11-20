import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";
import { ImperativeApi } from "./pages/ImperativeApi";
import { Miscelaneous } from "./pages/Miscelaneous";
import { Pricing } from "./pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/form",
        element: <Form />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/misc",
        element: <Miscelaneous />
      },
      {
        path: "/imperative-api",
        element: <ImperativeApi />
      }
    ]
  }
]);
