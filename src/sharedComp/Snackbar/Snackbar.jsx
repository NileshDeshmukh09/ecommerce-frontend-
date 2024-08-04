import React from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "../../redux/slices/snackbarSlice"; 
import { IoCloseSharp } from "react-icons/io5";

const SnackBar = () => {
  const { open, message, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <IoCloseSharp/>
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const MemoizedSnackbar = React.memo(SnackBar);
export default MemoizedSnackbar;

