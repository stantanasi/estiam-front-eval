import React from 'react';
import { useHistory } from 'react-router';
import {
  makeStyles,
  Drawer,
  Hidden,
  Box,
  Button
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
  const history = useHistory();

  const handleUserListButton = () => {
    history.push('/app/users');
  };

  const handleCreateUserButton = () => {
    history.push('/app/create-user');
  };

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
          <Box>
            <Button onClick={handleUserListButton}>
              User list
            </Button>
          </Box>
          <Box>
            <Button onClick={handleCreateUserButton}>
              Créer un user
            </Button>
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
          <Box>
            <Button onClick={handleUserListButton}>
              User list
            </Button>
          </Box>
          <Box>
            <Button onClick={handleCreateUserButton}>
              Créer un user
            </Button>
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
