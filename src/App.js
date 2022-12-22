import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import Routes from 'src/Routes';
import Auth from 'src/components/Auth';
import CookiesNotification from 'src/components/CookiesNotification';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import { UserContextProvider } from 'src/context/UserContext';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider maxSnack={1}>
            <Router history={history}>
              <UserContextProvider>
                <Auth>
                  <GoogleAnalytics />
                  <CookiesNotification />
                  <Routes />
                </Auth>
              </UserContextProvider>
            </Router>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
