import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MIN } from "../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MIN(5)]}
        errorText="please enter a valid description (5 characters)"
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
