import React from 'react';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  FormHelperText,
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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().max(255).required('First name is required'),
            lastName: Yup.string().max(255).required('Last name is required'),
            email: Yup.string().email('Must be a valid email')
              .max(255)
              .min(10)
              .required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                error={Boolean(touched.firstName && errors.firstName)}
                fullWidth
                autoFocus
                helperText={touched.firstName && errors.firstName}
                label="First name"
                margin="normal"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                type="name"
                value={values.firstName}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.lastName && errors.lastName)}
                fullWidth
                autoFocus
                helperText={touched.lastName && errors.lastName}
                label="Last name"
                margin="normal"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                type="name"
                value={values.lastName}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                autoFocus
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <Box mt={2}>
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Create
                </Button>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>
                      {errors.submit}
                    </FormHelperText>
                  </Box>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Page>
  );
}

export default CreateUserView;
