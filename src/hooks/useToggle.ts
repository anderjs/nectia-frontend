import React from "react";

/**
 * @description
 * Hook for toggling a boolean value.
 * @param initialState - The initial state of the hook.
 */
export default function useToggle (initialState?: boolean) {
  const [state, setState] = React.useState<boolean>(initialState ?? false);

  /**
   * @description
   * Toggle the state to the opposite of what it is currently.
   */
  const handleToggleFunction = React.useCallback(() : void => {
    setState((currentState) => !currentState);
  }, []);

  return {
    status: state,
    handleSwitchStatus: handleToggleFunction
  }
};