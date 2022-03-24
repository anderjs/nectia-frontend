import React from "react";


export interface FormFields<Field>  {
  fields: Field
}
/**
 * @param initialState - The initial state of the hook.
 */
export default function useForm<FormFields extends { [key: string]: string | number | boolean }>(initialState: FormFields) {
  const [form, setForm] = React.useState<FormFields>(initialState);

  /**
   * @description
   * Update the form state.
   */
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setForm((currentForm) => ({
        ...currentForm,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  return {
    form,
    handleChange,
  }
};
