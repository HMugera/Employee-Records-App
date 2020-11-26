import { TextField } from "@material-ui/core";
import React from "react";

function Input({ name, label, value, error = null, onChange, ...other }) {
  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
