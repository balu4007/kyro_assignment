import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={() => {}}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
