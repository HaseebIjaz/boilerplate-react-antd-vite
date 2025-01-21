import { BrowserRouter, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoutes />
        <PrivateRoutes />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
