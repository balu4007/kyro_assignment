import * as Yup from "yup";
export const userInitialValues = {
  _id: "",
  first_name: "",
  last_name: "",
  display_name: "",
  email: "",
  phone_home: "",
  phone_office: "",
  primary_location: "",
};

export const userValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is Required"),
  last_name: Yup.string().required("Last name is Required"),
  display_name: Yup.string().required("Display name is Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone_home: Yup.string().required("Required"),
  phone_office: Yup.string().required("Required"),
  primary_location: Yup.string().required("Required"),
});

export const formikProps = (name, formik) => ({
  name: name,
  value: formik.values[name],
  onChange: formik.handleChange,
  onBlur: formik.handleBlur,
  error: formik.touched[name] && Boolean(formik.errors[name]),
  helperText: formik.touched[name] ? formik.errors[name] : "",
});

export function formatedUserData(userData) {
  return {
    _id: userData?._id,
    first_name: userData?.first_name,
    last_name: userData?.last_name || "",
    display_name: userData?.display_name || "",
    email: userData?.email || "",
    phone_home:
      userData?.phone
        ?.find((obj) => obj?.type === "home")
        ?.number?.toString() || "",
    phone_office:
      userData?.phone
        ?.find((obj) => obj?.type === "office")
        ?.number?.toString() || "",
    primary_location: userData?.primary_location || "",
  };
}
export function getformatedUpdatedUserData(values) {
  return {
    _id: values?._id,
    first_name: values?.first_name,
    last_name: values?.last_name || "",
    display_name: values?.display_name || "",
    email: values?.email || "",
    phone: [
      {
        type: "home",
        number: values?.phone_home || "",
      },
      {
        type: "office",
        number: values?.phone_office || "",
      },
    ],
    primary_location: values?.primary_location || "",
  };
}
