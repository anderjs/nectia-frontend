import { useSelector } from "react-redux";

// - Selectors
import { authenticationSelector } from "src/store/reducers/authentication/selector";

/**
 * @description
 * Hook for getting the authentication state.
 */
export default function useAuth () {
  const user = useSelector(authenticationSelector);


  return user;
}