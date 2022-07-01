import { Alert, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AsyncStatus, ID } from "../../Constants";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";
import { useUpdateUserProfile } from "../../hooks/useUpdateUserProfile";
import {
  formatedUserData,
  getformatedUpdatedUserData,
  userInitialValues,
  userValidationSchema,
} from "../helper";
import Loader from "../Loader";
import EditProfile from "./EditProfile";
import { HeaderDiv, LeftContainer } from "./styled.componets";

function Profile() {
  const [initailData, setInitailData] = useState(userInitialValues);
  const { getUserProfile, userData } = useGetUserProfile();
  const { UpdateUserProfile, updateduserData } = useUpdateUserProfile();
  const [error, setError] = useState({
    iserror: false,
    msg: "",
  });
  const [isProfileCreated, setIsProfileCreated] = useState(false);
  useEffect(() => {
    getUserProfile(ID);
  }, []);

  useEffect(() => {
    if (userData.status === AsyncStatus.SUCCESS) {
      setInitailData({
        ...formatedUserData(userData.data),
      });
    } else if (userData.status === AsyncStatus.ERROR) {
      setError({ iserror: true, msg: userData?.error?.detail });
    }
  }, [userData]);

  useEffect(() => {
    if (updateduserData.status === AsyncStatus.SUCCESS) {
      setInitailData(userFormik.values);
      setIsProfileCreated(true);
    } else if (updateduserData.status === AsyncStatus.ERROR) {
      setError({ iserror: true, msg: updateduserData?.error?.detail });
    }
  }, [updateduserData]);

  const userFormik = useFormik({
    enableReinitialize: true,
    initialValues: initailData,
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      UpdateUserProfile(ID, getformatedUpdatedUserData(values));
    },
  });
  return (
    <>
      <LeftContainer>
        <HeaderDiv>
          <h4>Good Morning, Adam</h4>
          {moment().format("MMMM DD, YYYY")}
        </HeaderDiv>
        <h4>My Profile</h4>
      </LeftContainer>

      <EditProfile userFormik={userFormik} />
      {userData.status === AsyncStatus.LOADING ||
      updateduserData.status === AsyncStatus.LOADING ? (
        <Loader />
      ) : null}

      <Snackbar
        open={error.iserror}
        autoHideDuration={3000}
        onClose={() => {
          setError({ ...error, iserror: false });
        }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error.msg || "Some thing Went Wrong!!"}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isProfileCreated}
        autoHideDuration={3000}
        onClose={() => {
          setIsProfileCreated(false);
        }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {"Profile Updated Succesfully!!!"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Profile;
