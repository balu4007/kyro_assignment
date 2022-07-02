import { Button, Grid, Stack, TextField } from "@mui/material";
import moment from "moment";
import React from "react";
import { formikProps } from "../helper";
import {
  EditProfileCard,
  EditProfileContainer,
  HeaderDiv,
  LeftContainer,
} from "./styled.componets";
function EditProfile({ userFormik }) {
  return (
    <EditProfileContainer>
      <LeftContainer>
        <HeaderDiv>
          <h4>Good Morning, Adam</h4>
          {moment().format("MMMM DD, YYYY")}
        </HeaderDiv>
        <h4>My Profile</h4>
      </LeftContainer>
      <LeftContainer maxWidth="md">
        <EditProfileCard>
          <form
            onSubmit={userFormik.handleSubmit}
            onReset={userFormik.resetForm}
          >
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="first_name"
                  label="First Name"
                  variant="outlined"
                  {...formikProps("first_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  variant="outlined"
                  {...formikProps("last_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="display_name"
                  label="Display Name"
                  variant="outlined"
                  {...formikProps("display_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...formikProps("email", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="phone_home"
                  label="Phone Home"
                  variant="outlined"
                  type="number"
                  {...formikProps("phone_home", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="phone_office"
                  label="Phone Office"
                  variant="outlined"
                  type="number"
                  {...formikProps("phone_office", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="primary_location"
                  label="Location"
                  variant="outlined"
                  {...formikProps("primary_location", userFormik)}
                />
              </Grid>
            </Grid>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              marginTop={5}
            >
              <Button
                size="large"
                variant="contained"
                color="error"
                type="submit"
              >
                SAVE CHANGES
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                type="reset"
              >
                Reset
              </Button>
            </Stack>
          </form>
        </EditProfileCard>
      </LeftContainer>
    </EditProfileContainer>
  );
}

export default EditProfile;
