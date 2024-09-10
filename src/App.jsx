import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, AboutPage, WorksPage, ContactPage } from "./routes";

const router = createBrowserRouter([
  {
    path: "mirza-portfolio/",
    element: <HomePage />,
  },
  {
    path: "mirza-portfolio/about",
    element: <AboutPage />,
  },
  {
    path: "mirza-portfolio/works",
    element: <WorksPage />,
  },
  {
    path: "mirza-portfolio/contact",
    element: <ContactPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
