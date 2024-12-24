import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {onConfirm && (
          <Button onClick={onConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;