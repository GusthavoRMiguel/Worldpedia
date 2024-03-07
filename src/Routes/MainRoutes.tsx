import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries";
import { CountryPage } from "../pages/CountryPage";
import HistoryPage from "../pages/HistoryPage";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Countries /> },
    { path: "/country/:name", element: <CountryPage /> },
    { path: "/code/:code", element: <CountryPage /> },
    { path: "/history", element: <HistoryPage /> },
  ]);
};
