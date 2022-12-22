import React, { useEffect, useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import UserForm from './UserForm';
import usersService from 'src/services/usersService';

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
  const params = useParams();

  const [user, setUser] = useState();

  const onUserCreated = () => {
    history.push('/app/users');
  };

  const getUser = useCallback((id) => {
    usersService.getUser(id)
      .then((res) => {
        setUser(res);
      });
  }, []);

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, [getUser]);

  return (
    <Page
      className={classes.root}
      title="Create user"
    >
      <Container maxWidth="md">
        <UserForm user={user} onUserCreated={onUserCreated} />
      </Container>
    </Page>
  );
}

export default CreateUserView;
