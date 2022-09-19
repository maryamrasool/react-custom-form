import { FieldData, FieldError, InputField } from "../types/form";

export const checkRequiredFields = (
  formData: FieldData,
  inputs: InputField
) => {
  const errorData: FieldError = {};
  Object.entries(formData).forEach((field) => {
    if (inputs[field[0]].required && field[1]?.toString().trim() === "") {
      errorData[field[0]] = "This field is required";
    }
  });
  return errorData;
};

export const checkValidation = (formData: FieldData, inputs: InputField) => {
  const errorData: FieldError = {};
  Object.entries(formData).forEach((field) => {
    if (inputs[field[0]].validation) {
      let testRegex = new RegExp(inputs[field[0]].validation?.regex as string);
      if (!testRegex.test(field[1] as string)) {
        errorData[field[0]] = inputs[field[0]].validation
          ?.errorMessage as string;
      }
    }
  });
  return errorData;
};
