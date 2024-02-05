import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required("Please enter you name"),
  email: Yup.string().email().required("Please enter valid email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  dob: Yup.date().required("Please enter your dob"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter valid email"),
  password: Yup.string().min(6).required("Please enter valid password"),
});
