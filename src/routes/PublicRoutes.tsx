import { Login, PublicLayout } from "@/views";
import { Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<Login />} />
    </Route>
  );
};

export { PublicRoutes };
