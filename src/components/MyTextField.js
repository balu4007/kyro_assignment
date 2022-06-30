import { TextField } from "@mui/material";
import React from "react";

function MyTextField({ id, lable, formik, ...props }) {
  return (
    <TextField
      id={id}
      name={id}
      value={formik.values[id]}
      onChange={formik.handleChange}
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={formik.touched[id] && formik.errors[id]}
      {...props}
    />
  );
}

export default MyTextField;
