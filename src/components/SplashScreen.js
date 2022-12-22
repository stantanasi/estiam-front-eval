import React from 'react';
import {
  makeStyles,
  CircularProgress,
  Box
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000
  },
  logo: {
    maxWidth: '100%',
    width: 300
  }
}));

function SplashScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        mb={6}
      >
        <Logo className={classes.logo} />
      </Box>
      <CircularProgress />
    </div>
  );
}

export default SplashScreen;
