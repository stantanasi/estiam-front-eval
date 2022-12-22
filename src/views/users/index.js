import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo
} from 'react';
import {
  Container,
  makeStyles,
  Box
} from '@material-ui/core';
import Page from 'src/components/Page';
import usersService from 'src/services/usersService';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import useAxios from 'src/hooks/useAxios';
import UserContext from 'src/context/UserContext';
import Header from './Header';
import UsersTable from './UsersTable';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6)
  }
}));

const doSomethingBig = (test) => {
  console.log('Processing big data');
};

function UsersListView() {
  const classes = useStyles();
  const userName = useContext(UserContext);
  const isMountedRef = useIsMountedRef();
  const [data] = useAxios('https://jsonplaceholder.typicode.com/users');

  const [usersCount, setUsersCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [test, setTest] = useState('');

  const getData = useMemo(() => {
    doSomethingBig(test);
  }, [test]);

  const getUsers = useCallback(() => {
    usersService.listUsers()
      .then((res) => {
        if (isMountedRef.current) {
          setUsers(res);
          setUsersCount(res.length);
        }
      });
  }, []);

  useEffect(() => {
    console.log('Test react context: ');
    console.log(userName);

    getUsers();
  }, [getUsers, data]);

  const testButtonClicked = () => {};

  return (
    <Page
      className={classes.root}
      title="Users List"
    >
      <Container>
        <Header usersCount={usersCount} />

        <Box mt={3}>
          <UsersTable users={data} testButtonClicked={testButtonClicked} />
        </Box>
      </Container>
    </Page>
  );
}

export default UsersListView;
