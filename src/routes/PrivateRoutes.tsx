import { Analytics, PrivateLayout } from "@/views";
import { lazy } from "react";
import { Outlet, Route } from "react-router-dom";

const DashboardPage = lazy(() => import("@/views/private/Dashboard"));
const PrivateRoutes = () => {
  return (
    <div>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<DashboardPage />} />
        <Route index element={<Analytics />} />
      </Route>
      <Outlet />
    </div>
  );
};

export { PrivateRoutes };
