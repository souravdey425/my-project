import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [entryText, setEntryText] = useState("");
  const [entryAge, setEntryAge] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (entryText.trim().length === 0 && entryAge.trim().length === 0) {
      setErrorMessage({
        title: "Invalid Name and Age",
        message: "Please enter a valid Name & Age",
      });
      return;
    }
    if (+entryAge < 1) {
      setErrorMessage({
        title: "Invalid Age",
        message: "Please enter a valid Age>0",
      });
      return;
    }

    props.onAddUser(entryText, entryAge);
    setEntryText(" ");
    setEntryAge("  ");
  };
  const setEnterText = (event) => {
    setEntryText(event.target.value);
  };
  const setEnterAge = (event) => {
    setEntryAge(event.target.value);
  };
  const eraseError = () => {
    setErrorMessage(null);
  };

  return (
    <div>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={eraseError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={setEnterText} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={setEnterAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
