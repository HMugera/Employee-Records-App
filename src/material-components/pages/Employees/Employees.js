import React from "react";

import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../PageHeader";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function Employees() {
  const classes = useStyles();
  return (
    <div>
      <PageHeader
        icon={<SupervisedUserCircleIcon fontSize='large' />}
        title={"New Member"}
        subtitle={"Form design with validation"}
      ></PageHeader>
     
      
        <EmployeeForm mainTitle={"Personal details"} />
        {/* <EmployeeForm mainTitle={"Family details"}  />
        <EmployeeForm mainTitle={"Fincial details"} /> */}
    
    
    </div>
  );
}

export default Employees;
