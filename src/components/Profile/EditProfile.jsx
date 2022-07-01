import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { formikProps } from "../helper";
import {
  ButtonContainer,
  EditProfileCard,
  LeftContainer,
  SubmitButton,
} from "./styled.componets";
function EditProfile({ userFormik }) {
  return (
    <LeftContainer maxWidth="sm">
      <EditProfileCard>
        <form onSubmit={userFormik.handleSubmit} onReset={userFormik.resetForm}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={6}>
              <TextField
                id="first_name"
                label="First Name"
                variant="outlined"
                {...formikProps("first_name", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="last_name"
                label="Last Name"
                variant="outlined"
                {...formikProps("last_name", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="display_name"
                label="Display Name"
                variant="outlined"
                {...formikProps("display_name", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                {...formikProps("email", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_home"
                label="Phone Home"
                variant="outlined"
                type="number"
                {...formikProps("phone_home", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone_office"
                label="Phone Office"
                variant="outlined"
                type="number"
                {...formikProps("phone_office", userFormik)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="primary_location"
                label="Location"
                variant="outlined"
                {...formikProps("primary_location", userFormik)}
              />
            </Grid>
          </Grid>
          <ButtonContainer>
            <SubmitButton
              size="large"
              variant="contained"
              color="error"
              type="submit"
            >
              SAVE CHANGES
            </SubmitButton>
            <Button size="large" variant="outlined" color="error" type="reset">
              Reset
            </Button>
          </ButtonContainer>
        </form>
      </EditProfileCard>
    </LeftContainer>
  );
}

export default EditProfile;
