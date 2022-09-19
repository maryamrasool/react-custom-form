export type FormProps = {
  inputs: InputField;
  handleFormSubmit: (formData: FieldData) => void;
};

export type InputField = Record<string, FieldAttributes>;

export type FieldAttributes = {
  name: string;
  label: string;
  required?: boolean;
  validation?: FieldValidation;
};

export type FieldValidation = {
  regex: string;
  errorMessage: string;
};

export type FieldData = Record<string, string>;

export type FieldError = Record<string, string>;
