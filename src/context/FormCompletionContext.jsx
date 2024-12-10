import React, { createContext, useContext, useState } from "react";

const FormCompletionContext = createContext();

export const useFormCompletion = () => useContext(FormCompletionContext);

export const FormCompletionProvider = ({ children }) => {
  const [completedForms, setCompletedForms] = useState({
    customer_details: true,
    billing_details: false,
    event_details: false,
  });

  const [formData, setFormData] = useState({
    customer_details: {},
    billing_details: {},
    event_details: {},
  });

  const markFormAsCompleted = (formName) => {
    setCompletedForms((prev) => ({ ...prev, [formName]: true }));
  };

  const saveFormData = (formName, data) => {
    setFormData((prev) => ({ ...prev, [formName]: data }));
  };

  return (
    <FormCompletionContext.Provider
      value={{ completedForms, markFormAsCompleted, formData, saveFormData }}
    >
      {children}
    </FormCompletionContext.Provider>
  );
};
