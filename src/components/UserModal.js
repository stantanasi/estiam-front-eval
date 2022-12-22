import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import usersService from 'src/services/usersService';

function UserModal({ open, handleClose, userProfile, className, ...rest }) {
  const history = useHistory();

  const handleOnUpdateClick = () => {
    history.push(`/app/update-user/${userProfile.id}`);
  }
  const handleOnDeleteClick = () => {
    usersService.deleteUser(userProfile.id)
      .then(() => history.go(0))
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      {...rest}
    >
      <DialogTitle id="alert-dialog-title">
        {userProfile.firstName} {userProfile.lastName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {userProfile.phoneNumber}
          <br />
          {userProfile.city}
        </DialogContentText>
        <Button onClick={handleOnUpdateClick}>
          Update
        </Button>
        <Button onClick={handleOnDeleteClick}>
          Delete
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

UserModal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  userProfile: PropTypes.object
};

export default UserModal;
