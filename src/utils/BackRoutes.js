import React from "react";
import { Navigate } from "react-router-dom";

class BackRoutes extends React.Component {
  render() {
    const token = localStorage.getItem("token");
    if (token) return <Navigate to="/dashboard" replace={true} state={{ isRedirected: true }} />;
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{
          isRedirected: true,
        }}
      />
    );
  }
}

export default BackRoutes;
