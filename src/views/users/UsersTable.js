import React, { useState } from 'react';
import {
  makeStyles,
  Card,
  Box,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TablePagination
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import UserModal from 'src/components/UserModal';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

// rowPerPage // limit
function applyPagination(users, page, rowPerPage) {
  return users.slice(page * rowPerPage, page * rowPerPage + rowPerPage);
}

function UsersTable({ className, users, testButtonClicked, ...rest }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    username: '',
    phone: '',
    companyName: ''
  });

  const [page, setPage] = useState(0); // page
  const [rowPerPage, setRowPerPage] = useState(2); // limit

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPage = (event) => {
    setRowPerPage(event.target.value);
  };

  const handleUserProfile = (profile) => {
    setUserProfile({
      name: profile.name,
      username: profile.username,
      phone: profile.phone,
      companyName: profile.company.name
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const usersToDisplay = applyPagination(users, page, rowPerPage);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              usersToDisplay && usersToDisplay.map((user) => {
                return (
                  <TableRow
                    key={user.id}
                  >
                    <TableCell>
                      {user.name}
                    </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={() => handleUserProfile(user)}
                      >
                        Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Box>

      <TablePagination
        component="div"
        count={users.length}
        page={page}
        rowsPerPage={rowPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPage}
        rowsPerPageOptions={[2, 5, 10]}
      />
      <UserModal
        open={open}
        handleClose={handleClose}
        userProfile={userProfile}
      />
    </Card>
  );
}

UsersTable.prototype = {
  className: PropTypes.string,
  users: PropTypes.array,
  testButtonClicked: PropTypes.any,
};

UsersTable.defaultProps = {
  users: []
};

export default UsersTable;
