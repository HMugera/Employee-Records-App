import React, { useEffect } from "react";

import { useForm, Form } from "../../useForm";
import Controls from "./../../controls/Controls";
import * as employeeService from "../../../services/employeeService";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const initialFormValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};
function EmployeeForm({ mainTitle, addOrEdit, recordForEdit }) {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email =
        values.email && /$^|.+@+.+..+/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9
          ? ""
          : "Check input minimum 10 numbers required.";
    if ("depertmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    resetForm,
    handleInputChange,
    errors,
    setErrors,
  } = useForm(initialFormValues, true, validate);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
      console.log(values);
    } else {
      return;
    }
  };
  useEffect(() => {
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);

  return (
    <div className={classes.pageContent}>
      <Typography variant='h5' component='div'>
        {mainTitle}
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name='fullName'
              label='Full Name'
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <Controls.Input
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              name='mobile'
              label='Mobile'
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.Input
              name='city'
              label='City'
              value={values.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name='gender'
              label='Gender'
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
            <Controls.Select
              name='departmentId'
              label='Department'
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            />
            <Controls.Datepicker
              name='hireDate'
              label='Hire Date'
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.Checkbox
              name='isPermanent'
              label='Permanent Employee'
              value={values.isPermanent}
              onChange={handleInputChange}
            />

            <div>
              <Controls.Button text='Submit' type='submit' />
              <Controls.Button
                color='default'
                text='Reset'
                onClick={resetForm}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}

export default EmployeeForm;
