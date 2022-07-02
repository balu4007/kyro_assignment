import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { ProfileBodyContainer, ViewProfileContainer } from "./styled.componets";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import profilePic from "../../static/images/1.jpg";

export function ViewProfile({ userFormik }) {
  return (
    <ViewProfileContainer>
      <Stack sx={{ height: "100vh" }}>
        {/* Header container */}
        <Stack direction="row" spacing={2} alignItems="center" padding={2}>
          <Button variant="contained" color="error" startIcon={<AddIcon />}>
            ADD PROJECT
          </Button>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt="Remy Sharp" variant="rounded" src={profilePic} />
            <Stack spacing={0.5}>
              <Typography variant="p" component="h5" m={0} fontSize={15}>
                Adam
              </Typography>
              <Typography variant="p" m={0} fontSize={11}>
                Project Manager
              </Typography>
            </Stack>
            <ArrowDropDownOutlinedIcon style={{ color: "#989a9e" }} />
          </Stack>
        </Stack>
        {/* profile Container */}
        <ProfileBodyContainer spacing={2} sx={{ flex: 1 }}>
          <Avatar
            alt="Remy Sharp"
            variant="rounded"
            sx={{ width: 150, height: 150, borderRadius: "25px" }}
            src={profilePic}
          />
          <Typography variant="h3" m={0} fontSize={20}>
            {`${userFormik.values["first_name"]}  ${userFormik.values["last_name"]}`}
          </Typography>
          <Typography variant="p" m={0} fontSize={15}>
            {`${userFormik.values["email"]}`}
          </Typography>
        </ProfileBodyContainer>
      </Stack>
    </ViewProfileContainer>
  );
  //"#E7EBF0"
}
