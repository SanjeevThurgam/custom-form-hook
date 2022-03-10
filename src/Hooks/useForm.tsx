// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FormEventHandler, useState } from "react";

// TODO: Define necessary typescript prop types, other types.

const useForm = () => {
  // TODO: Define necessary state variables and helper functions.

  // const [inputs, setInputs] = useState({});
  // const [firstName, setFirstName] = useState();
  // const [isInvalid, setIsInvalid] = useState(true);

  // const onChange = (e: unknown) => {
  //   setInputs(e.target.value);
  //   setIsValid(checkIfValid());
  // }

  // const checkIfValid = () => {
  //   return true
  // }


  const handleSubmit = (onSubmit: FormEventHandler<HTMLDivElement>) => {

    //Check that the input is proper with the registers, if it is proper, return onSubmit, else return a diff function that alerts with highlights


    return onSubmit; 
  };

  // const register = (name: String) => {
  //   setInputs(inputs)
    

  //   return {onChange, isInvalid}; // TODO
  // };

  return {
    handleSubmit,
    // register,
  };
};

export default useForm;
