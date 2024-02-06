import { useFormik } from "formik";
import { loginSchema } from "./Schema/user";
import { Link } from "react-router-dom";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        await axios
          .get("http://localhost:3002/user/login", {
            params: { email: values.email, password: values.password },
          })
          .then((res) => {
            alert("success");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  return (
    <>
      <section className="bg-light py-5">
        <div className="container" style={{ width: "30rem" }}>
          <div className="row justify-content-center align-content-center">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-xl-5">
                <div className="text-secondary mb-4 text-center">
                  Sign in to your account
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="row form-floating mb-3">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        {errors.email && touched.email ? (
                          <p className="text-danger form-error">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="row form-floating mb-3">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Enter Your Password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                      <div className="row justify-content-center py-1">
                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-md"
                        >
                          Login
                        </button>
                      </div>
                      <div>
                        <p className="text-secondary pt-4">
                          dont have an account?{" "}
                          <Link
                            to="/signup"
                            className="link-primary text-decoration-none px-2"
                          >
                            Signup
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
