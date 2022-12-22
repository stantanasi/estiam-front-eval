import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  },
}));

function CreateUserView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create user"
    >
      <Container maxWidth="md">
      </Container>
    </Page>
  );
}

export default CreateUserView;
