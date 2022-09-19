# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Solution formulation

Some of the main points that were kept in mind while creating the custom form component are as follows:

1. Form component accepts an object containing the information relevant to the input fields. The object for an input field must contain a label and a name for the field. This is required to create a unique input field and display it
2. The input field object may contain optional attributes to define whether the field is required or not. It may also contain validation regex and a custom error message to be displayed when the field does not validate
3. Form component also accepts a callback function which is executed when the form is submitted successfully. An object containing the field data (key and value) is passed to this callback function from the form component
4. The form component has two types of validation checks. It checks if a field was required or not and also compares the user input to a custom regex pattern

## Assumptions

When implementing the form component, the assumptions made are as follows:

1. Validation for an input field will be done using a Regex pattern.

## Libraries/Tools used

This project uses React, TypeScript and relies on Tailwind css for styling of the form component.
Additionally, it uses react-toastify to display toast message on successful submission of the form.

## Possible Enhancements

1. Create custom component for input field
2. Enhance validation from using a regex to a custom validation callback function
3. Pass custom input field styles to the form component
