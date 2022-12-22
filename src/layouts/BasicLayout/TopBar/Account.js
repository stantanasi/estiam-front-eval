import React, { useState, useRef } from 'react';
import {
  makeStyles,
  Box,
  Avatar,
  ButtonBase,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/actions/accountActions';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}));

function Account() {
  const classes = useStyles();
  const ref = useRef(null);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    handleCloseMenu();
    await dispatch(logout());
    history.push('/login');
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpenMenu}
        ref={ref}
      >
        <Avatar
          alt="User"
          className={classes.avatar}
        >
          {account.user.email.substring(0, 1).toUpperCase()}
        </Avatar>
      </Box>
      <Menu
        onClose={handleCloseMenu}
        open={isMenuOpen}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        getContentAnchorEl={null}
        PaperProps={{ className: classes.popover }}
      >
        <MenuItem
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
