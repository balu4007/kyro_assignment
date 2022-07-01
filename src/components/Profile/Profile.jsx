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

function Profile() {
  const [initailData, setInitailData] = useState(userInitialValues);
  const { getUserProfile, userData } = useGetUserProfile();
  const { UpdateUserProfile, updateduserData } = useUpdateUserProfile();
  useEffect(() => {
    getUserProfile(ID);
  }, []);

  useEffect(() => {
    if (userData.status === AsyncStatus.SUCCESS) {
      setInitailData({
        ...formatedUserData(userData.data),
      });
    } else if (userData.status === AsyncStatus.ERROR) {
      console.log(userData.error?.detail);
    }
  }, [userData]);

  useEffect(() => {
    if (updateduserData.status === AsyncStatus.SUCCESS) {
      setInitailData(userFormik.values);
    } else if (updateduserData.status === AsyncStatus.ERROR) {
      console.log(updateduserData.error?.detail);
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
      <div>
        <h4>Good Morning, Adam</h4>
        <div>{moment().format("MMMM DD, YYYY")}</div>
      </div>

      <h4>My Profile</h4>
      <EditProfile userFormik={userFormik} />
      {userData.status === AsyncStatus.LOADING ||
      updateduserData.status === AsyncStatus.LOADING ? (
        <Loader />
      ) : null}
    </>
  );
}

export default Profile;
