
import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
      setValues(initialValues); // Reset form after submission
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.patientName) errors.patientName = 'Patient name is required';
    if (!values.doctorId) errors.doctorId = 'Doctor is required';
    if (!values.date) errors.date = 'Date is required';
    if (!values.time) errors.time = 'Time is required';
    return errors;
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;