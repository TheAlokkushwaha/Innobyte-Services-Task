import React from "react";
import { useRoutes } from "react-router-dom";
import KingsukhLanding from "./pages/KingsukhLanding";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <KingsukhLanding /> }
  ]);

  return element;
};

export default ProjectRoutes;
