import { Button, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import moment from "moment";
import React from "react";
import { formikProps } from "../helper";
import {
  EditProfileCard,
  EditProfileContainer,
  HeaderDiv,
  LeftContainer,
} from "./styled.componets";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

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
                  id="first_name"
                  label="First Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("first_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="last_name"
                  label="Last Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("last_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="display_name"
                  label="Display Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("display_name", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("email", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone_home"
                  label="Phone Home"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("phone_home", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone_office"
                  label="Phone Office"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...formikProps("phone_office", userFormik)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="primary_location"
                  label="Location"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddLocationOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
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
