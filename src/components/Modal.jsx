import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, handleClose, children }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        Chart
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          style={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
