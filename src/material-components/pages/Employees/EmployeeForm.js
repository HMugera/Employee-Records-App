import React, { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import { useForm, Form } from "../../useForm";
import Controls from "./../../controls/Controls";
import * as employeeService from "../../../services/employeeService";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

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
  id: uuid_v4(),
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departementId: "",
  hireDate: new Date(),
  isPermanent: false,
};
function EmployeeForm({ mainTitle }) {
  const { values, setValues, handleInputChange } = useForm(initialFormValues);

  const classes = useStyles();

  return (
    <Paper className={classes.pageContent}>
      <Typography variant='h5' component='div'>
        {mainTitle}
      </Typography>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name='fullName'
              label='Full Name'
              value={values.fullName}
              onChange={handleInputChange}
            />
            <Controls.Input
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
            />
            <Controls.Input
              name='mobile'
              label='Mobile'
              value={values.mobile}
              onChange={handleInputChange}
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
              <Controls.Button text='Submit' type="submit" />
              <Controls.Button color='default' text='Reset' />
            </div>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
}

export default EmployeeForm;
