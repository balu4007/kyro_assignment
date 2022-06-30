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
