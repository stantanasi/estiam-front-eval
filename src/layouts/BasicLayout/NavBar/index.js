import React from 'react';
import {
  makeStyles,
  Drawer,
  Hidden,
  Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {},
  sideDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  logo: {
    maxWidth: '100%'
  }
}));

function NavBar({ onMobileNavClose, openMobile }) {
  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          classes={{ paper: classes.sideDrawer }}
          open={openMobile}
          onClose={onMobileNavClose}
        >
          <Box
            p={2}
            mt={5}
            display="flex"
            justifyContent="center"
          >
            <Logo className={classes.logo} />
          </Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          variant="persistent"
          classes={{ paper: classes.sideDrawer }}
          open
        >
          <Box
            p={2}
            mt={5}
            display="flex"
            justifyContent="center"
          >
            <Logo className={classes.logo} />
          </Box>
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileNavClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
