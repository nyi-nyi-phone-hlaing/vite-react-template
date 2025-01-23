import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />, // WelcomePage as the main route
  },
  // Add more routes here as needed
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
