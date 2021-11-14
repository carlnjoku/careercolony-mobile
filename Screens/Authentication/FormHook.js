import React from 'react';

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // console.log('authenticated!', values.email, values.password);
        authenticate();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChangeEmail(event) {
    console.log(event)
    setValues({
      ...values,
      email: event,
    });
  }
  function handleChangePassword(event) {
    console.log(event)
    setValues({
      ...values,
      password: event,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleClickShowPassword() {
    setValues({ showPassword: !values.showPassword });
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  function handleSubmit() {
    // event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    // console.warn('submitting')
  }

  return {
    handleSubmit,
    // handleChange,
    handleBlur,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleChangeEmail,
    handleChangePassword,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
