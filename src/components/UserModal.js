import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';

function UserModal({
  open,
  handleClose,
  userProfile,
  className,
  ...rest
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      {...rest}
    >
      <DialogTitle id="alert-dialog-title">{userProfile.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {userProfile.username}
          <br />
          {userProfile.phone}
          <br />
          {userProfile.companyName}
        </DialogContentText>
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
  userProfile: PropTypes.object,
};

export default UserModal;
