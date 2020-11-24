import {
  FormControl,
  FormControlLabel,
  FormLabel,
    Radio,
  RadioGroup as MuiRadioGroup
} from "@material-ui/core";
import React from "react";

function RadioGroup({ name, label, value, onChange, items }) {
  return (
    <FormControl>
          <FormLabel>{label }</FormLabel>
      <MuiRadioGroup row  name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio color="primary"/>}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
