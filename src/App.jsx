import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage, AboutPage, WorksPage, ContactPage } from "./routes";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/works",
    element: <WorksPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
