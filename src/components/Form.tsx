import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FieldData, FieldError, FormProps } from "../types/form";
import { checkRequiredFields, checkValidation } from "../utils/formValidation";

const Form = ({ inputs, handleFormSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FieldData>({});
  const [errors, setErrors] = useState<FieldError>({});
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const data: FieldData = {};
    Object.keys(inputs).forEach((input) => {
      data[input] = "";
    });
    setFormData(data);
  }, [inputs]);

  useEffect(() => {
    isFormSubmitted && formData && isFormVerified();
  }, [formData]);

  const handleInputChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const data = { ...formData };
    data[e.currentTarget.name] = e.currentTarget.value;
    setFormData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormSubmitted(true);
    if (isFormVerified()) {
      handleFormSubmit(formData);
      toast.success("Form submitted successfully");
    }
  };

  const isFormVerified = () => {
    const validationErrors = checkValidation(formData, inputs);
    const requiredErrors = checkRequiredFields(formData, inputs);
    const errorData = { ...validationErrors, ...requiredErrors };

    if (Object.keys(errorData).length > 0) {
      setErrors(errorData);
    } else {
      setErrors({});
      return true;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="w-6/12" onSubmit={handleSubmit}>
        {Object.entries(inputs).map((input) => {
          const inputKey = input[0];
          const inputValue = input[1];
          return (
            <div key={inputKey} className="mb-4">
              <label className="text-base">{inputValue.label}</label>
              <input
                className={`w-full h-8 p-2 border border-solid rounded ${
                  errors?.[inputKey] ? "border-red-500" : "border-slate-300"
                }`}
                type="text"
                name={inputValue.name}
                placeholder={inputValue.label}
                onChange={(e) => handleInputChange(e)}
              />
              {errors?.[inputKey] && (
                <p className="text-red-500 text-sm	">{errors?.[inputKey]}</p>
              )}
            </div>
          );
        })}
        <button
          className="h-8 w-24 bg-sky-600 text-white text-base mt-2 border border-solid border-slate-300 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer position="bottom-left" autoClose={5000} />
    </div>
  );
};

export default Form;
