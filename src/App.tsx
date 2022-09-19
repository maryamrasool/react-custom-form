import React from "react";

import Form from "./components/Form";
import { FieldData } from "./types/form";

const App: React.FC = () => {
  const inputs = {
    firstName: {
      name: "firstName",
      label: "First Name",
      required: true,
      validation: {
        regex: "^wooga.name",
        errorMessage: "Name must start with wooga.name",
      },
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      required: true,
    },
    occupation: {
      name: "occupation",
      label: "Occupation",
    },
  };

  // callback function that receives form data after successful submission
  const handleSubmit = (formData: FieldData) => {
    console.log("Here", formData);
  };

  return <Form inputs={inputs} handleFormSubmit={handleSubmit} />;
};

export default App;
