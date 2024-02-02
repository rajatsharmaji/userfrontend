import { Formik } from "formik";

function Login() {
  return (
    <>
      <section className="bg-light vh-100 py-5">
        <div className="container w-25">
          <div className="row justify-content-center align-content-center">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-xl-5">
                <div className="text-secondary mb-4 text-center">
                  Sign in to your account
                </div>

                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form action="">
                      <div className="row gy-2 overflow-hidden">
                        <div className="col-12">
                          {errors.email && touched.email && errors.email}
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Enter Your Email"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              required={true}
                            />
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Enter Your Password"
                              id="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              required={true}
                            />
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </div>

                          <div className="row justify-content-center py-1">
                            <button className="btn btn-outline-primary btn-md">
                              Login
                            </button>
                          </div>
                          <div>
                            <p className="text-secondary pt-4">
                              dont have an account?{" "}
                              <a
                                className="link-primary text-decoration-none px-2"
                                href="/signup"
                              >
                                Sign up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
