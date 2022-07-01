import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AsyncStatus } from "../../Constants";
import { useGetUserProfile } from "../../hooks/useGetUserProfile";
import { userInitialValues, userValidationSchema } from "../helper";
import Loader from "../Loader";
import EditProfile from "./EditProfile";

function Profile() {
  const [initailData, setInitailData] = useState(userInitialValues);
  const { getUserProfile, userData } = useGetUserProfile();
  useEffect(() => {
    getUserProfile("62b9b1ce08bb8e6bf8c1a0d9");
  }, []);
  useEffect(() => {
    if (userData.status === AsyncStatus.SUCCESS) {
      setInitailData({
        _id: userData.data?._id,
        first_name: userData.data?.first_name,
        last_name: userData.data?.last_name || "",
        display_name: userData.data?.display_name || "",
        email: userData.data?.email || "",
        phone_home:
          userData.data?.phone?.find((obj) => obj?.type === "home")?.number ||
          "",
        phone_office:
          userData.data?.phone?.find((obj) => obj?.type === "office")?.number ||
          "",
        primary_location: userData.data?.primary_location || "",
      });
    } else if (userData.status === AsyncStatus.ERROR) {
      console.log(userData.error?.detail);
    }
  }, [userData]);
  const userFormik = useFormik({
    enableReinitialize: true,
    initialValues: initailData,
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      {userData.status === AsyncStatus.LOADING ? <Loader /> : null}
    </>
  );
}

export default Profile;
