import React, { useState } from 'react';
import {
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

function BasicLayout({ children }) {
  const classes = useStyles();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div
      className={classes.root}
    >
      {/* TopBAR */}
      <TopBar onMobileNavOpen={() => setIsMobileNavOpen(true)} />

      {/* NavBar */}
      <NavBar
        onMobileNavClose={() => setIsMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />

      {/* Children */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.any
};

export default BasicLayout;
