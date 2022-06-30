import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { userInitialValues, userValidationSchema } from "../helper";
import EditProfile from "./EditProfile";

function Profile() {
  const userFormik = useFormik({
    initialValues: userInitialValues,
    enableReinitialize: true,
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
    </>
  );
}

export default Profile;
