import React from "react";
import { useDispatch, useSelector } from "react-redux";

// - Selectors
import { authenticationSelector } from "src/store/reducers/authentication/selector";

// - Thunks
import { loginThunk } from "src/store/reducers/authentication/thunks";

/**
 * @description
 * Hook for getting the authentication state.
 */
export default function useAuth() {
  const { user, loading } = useSelector(authenticationSelector);

  const dispatch = useDispatch();

  const handleAuthenticate = React.useCallback(
    (email: string, password: string) => {
      dispatch(loginThunk({ email, password }))
    },
    [dispatch]
  );

  return {
    user,
    loading,
    handleAuthenticate,
  };
}
