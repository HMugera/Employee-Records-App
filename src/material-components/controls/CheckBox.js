import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

function Checkbox({ name, label, value, onChange }) {
  const convertToDefEventPar = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPar(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default Checkbox;
