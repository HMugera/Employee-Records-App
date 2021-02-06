import React from 'react';

import SideMenu from './material-components/SideMenu';
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Header from './material-components/Header';
import Employees from './material-components/pages/Employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#fff",
      // light: "#000",
      main: '#289cc3',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    borderRadius: '10px',
  },
});

const useStyles = makeStyles({
  appMain: {
    padding: '10px',
    //paddingLeft: '310px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {/* <SideMenu /> */}
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
