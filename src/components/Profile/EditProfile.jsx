import { Button, TextField } from "@mui/material";
import React from "react";
import { formikProps } from "../helper";
function EditProfile({ userFormik }) {
  return (
    <div>
      <form onSubmit={userFormik.handleSubmit} onReset={userFormik.resetForm}>
        <TextField
          id="first_name"
          label="First Name"
          variant="outlined"
          {...formikProps("first_name", userFormik)}
        />
        <TextField
          id="last_name"
          label="Last Name"
          variant="outlined"
          {...formikProps("last_name", userFormik)}
        />
        <TextField
          id="display_name"
          label="Display Name"
          variant="outlined"
          {...formikProps("display_name", userFormik)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...formikProps("email", userFormik)}
        />
        <TextField
          id="phone_home"
          label="Phone Home"
          variant="outlined"
          type="number"
          {...formikProps("phone_home", userFormik)}
        />
        <TextField
          id="phone_office"
          label="Phone Office"
          variant="outlined"
          type="number"
          {...formikProps("phone_office", userFormik)}
        />
        <TextField
          id="primary_location"
          label="Location"
          variant="outlined"
          {...formikProps("primary_location", userFormik)}
        />
        <Button variant="contained" color="error" type="submit">
          SAVE CHANGES
        </Button>
        <Button variant="outlined" color="error" type="reset">
          Reset
        </Button>
      </form>
    </div>
  );
}

export default EditProfile;
