import React from "react";
import { useRoutes } from "react-router-dom";
import TripGoalLanding from "./pages/TripGoalLanding";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <TripGoalLanding /> }
  ]);

  return element;
};

export default ProjectRoutes;
