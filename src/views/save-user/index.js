import React from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import UserForm from './UserForm';

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
  const history = useHistory();

  const onUserCreated = () => {
    history.push('/app/users');
  };

  return (
    <Page
      className={classes.root}
      title="Create user"
    >
      <Container maxWidth="md">
        <UserForm onUserCreated={onUserCreated} />
      </Container>
    </Page>
  );
}

export default CreateUserView;
