import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Avatar,
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  colors,
  makeStyles, Button
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Page from 'src/components/Page';
import LoginForm from './LoginForm';

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
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64
  }
}));

function LoginView() {
  const classes = useStyles();
  const history = useHistory();

  const [loginDes, setLoginDes] = useState('...');

  const handleSubmitSuccess = () => {
    history.push('/app/users');
  };

  const testButtonClicked = () => {
    setLoginDes('Login to our application');
  };

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Container maxWidth="md">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography
              variant="h2"
              color="textPrimary"
            >
              Sign in
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >
              {loginDes}
            </Typography>
            <Box mt={3}>
              <LoginForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
            <Box mt={2}>
              <Button
                color="secondary"
                fullWidth
                size="large"
                variant="contained"
                onClick={testButtonClicked}
              >
                Test
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
