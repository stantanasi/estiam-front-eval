import React, {
  useState,
  useEffect,
} from 'react';
import {
  makeStyles,
  Portal,
  Typography,
  Box,
  Button
} from '@material-ui/core';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 600,
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
}));

function CookiesNotification() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    Cookies.set('consent', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const consent = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.root}>
        <Typography
          variant="body1"
          color="inherit"
        >
          We use Cookies in this website.
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            onClick={handleClose}
          >
            I Agree
          </Button>
        </Box>
      </div>
    </Portal>
  );
}

export default CookiesNotification;
