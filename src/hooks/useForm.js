import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      return true;
    }
    return false;
  };

  const setFieldValue = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  };
};

export default useForm;
