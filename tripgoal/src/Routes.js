import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import KingsukhLanding from "./pages/KingsukhLanding";
import AccessRestricted from "pages/KingsukhLanding/AccessRestricted";

const ProjectRoutes = () => {
  const isDesktop = window.innerWidth >= 1024; // Check screen size

  if (!isDesktop) {
    return <AccessRestricted />;
  }

  return (
    <Switch>
      {/* Define your app's routes here */}
      <Route path="/" element={<KingsukhLanding />} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default ProjectRoutes;
