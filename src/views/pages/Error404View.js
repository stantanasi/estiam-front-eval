import React from 'react';
import {
  makeStyles,
  Container,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80
  },
}));

function Error404View() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="404"
    >
      <Container>
        <Typography
          align="center"
          variant="h1"
          color="textPrimary"
        >
          404 The page you are looking for is not found
        </Typography>
      </Container>
    </Page>
  );
}

export default Error404View;
