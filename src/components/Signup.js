import { useFormik } from "formik";
import { signupSchema } from "./Schema/user";
import { Link } from "react-router-dom";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
};
function Signup() {
  const { values, errors, handleBlur, handleSubmit, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        axios
          .post("http://localhost:3002/user/add", {
            name: values.name,
            email: values.email,
            password: values.password,
            dob: values.dob,
          })
          .then((res) => {
            alert("success");
            console.log(res);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      },
    });

  return (
    <>
      <section className="bg-light vh-100 py-5">
        <div className="container w-25">
          <div className="card">
            <div className="card-body p-xl-5">
              <div className="py-3 text-center text-secondary">
                create your account
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-2 overflow-hidden">
                  <div>
                    <div className="row form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      ></input>
                      <label htmlFor="name" className="form-label">
                        username
                      </label>
                      {errors.name && touched.name ? (
                        <p className="text-danger form-error">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="row form-floating mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        id="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      {errors.email && touched.email ? (
                        <p className="text-danger form-error">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="row form-floating mb-3">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        id="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      {errors.password && touched.password ? (
                        <p className="text-danger form-error">
                          {errors.password}
                        </p>
                      ) : null}
                    </div>
                    <div className="row form-floating mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                      </label>
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="text-danger form-error">
                          {errors.confirmPassword}
                        </p>
                      ) : null}
                    </div>
                    <div className="row form-floating mb-3">
                      <input
                        className="form-control"
                        type="date"
                        placeholder="Enter Your date of birth"
                        id="dob"
                        name="dob"
                        value={values.dob}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="dob" className="form-label">
                        date of birth
                      </label>
                      {errors.dob && touched.dob ? (
                        <p className="text-danger form-error">{errors.dob}</p>
                      ) : null}
                    </div>
                    <div className="row py-3">
                      <button type="submit" className="btn btn-outline-primary">
                        Signup
                      </button>
                    </div>
                    <div>
                      <p className="py-3 text-secondary">
                        already have an account?{" "}
                        <Link to="/" className="px-2 text-decoration-none">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
