import { MainLayout } from "./layouts/MainLayout";
import { pathOfRoutes } from "@/constants/pathOfRoutes";
import Home from "@/pages/Home/Home";
import { AnonymousLayout } from "@/layouts/AnonymousLayout";
import AboutUs from "./pages/AboutUs/AboutUs";

export const ROUTES = [
  {
    layout: <AnonymousLayout />,
    routes: [
      {
        name: "home",
        title: "Home page",
        element: <Home />,
        path: pathOfRoutes.HOME_ROUTE,
        isPublic: true,
      },
      {
        name: "about us",
        title: "About us page",
        element: <AboutUs />,
        path: pathOfRoutes.ABOUT_US_ROUTE,
        isPublic: true,
      },
    ],
  },

  {
    layout: <MainLayout />,
    routes: [
      {
        name: "home",
        title: "Home page",
        element: <Home />,
        path: pathOfRoutes.HOME_ROUTE,
        isPublic: true,
      },
    ],
  },
];
