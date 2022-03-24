import React from "react";
import { useNavigate } from "react-router-dom";

// - Router
import { Router } from "src/constants";

// - Hooks
import useAuth from "src/hooks/useAuth";

/**
 * @description
 * Renders a component if the user is authenticated.
 */
const Private: React.FunctionComponent = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  /**
   * @description
   * Checks if the user is authenticated, if not redirects to the login page.
   */
  React.useEffect(() => {
    user || navigate(Router.HOME);
  }, [user, navigate]);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
};

export default Private;
