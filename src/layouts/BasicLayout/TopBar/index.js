import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Hidden,
  IconButton,
  Switch
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { THEMES } from 'src/constants';
import { Menu as MenuIcon } from 'react-feather';
import useSettings from 'src/hooks/useSettings';
import Logo from 'src/components/Logo';
import Account from './Account';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 64
  },
  menuButton: {
    color: 'black'
  },
  logo: {
    maxWidth: '100%',
    width: 180
  }
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const { settings, saveSettings } = useSettings();

  const [switchState, setSwitchState] = useState(settings.theme === 'LIGHT');

  const handleChangeTheme = (event) => {
    setSwitchState(event.target.checked);
    saveSettings({
      theme: settings.theme === 'LIGHT' ? 'ONE_DARK' : 'LIGHT'
    });
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Logo
            src="/static/logo-white.png"
            className={classes.logo}
          />
        </Hidden>
        <Box
          flexGrow={6}
        />
        <Box
          flexGrow={6}
        />
        <Box
          flexGrow={6}
        />
        <Switch
          checked={switchState}
          onChange={handleChangeTheme}
          name="changeTheme"
          color="default"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Box>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
