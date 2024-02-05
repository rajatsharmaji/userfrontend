import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
};
function Signup() {
  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <section className="bg-light vh-100 py-5">
        <div className="container w-25 py-5">
          <div className="card">
            <div className="card-body">
              <div className="py-3 text-center text-secondary">
                create your account
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-2 overflow-hidden">
                  <div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter Your Name"
                        required={true}
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      ></input>
                      <label htmlFor="name" className="form-label">
                        username
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        id="email"
                        required={true}
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        name="password"
                        id="password"
                        required={true}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        required={true}
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="date"
                        placeholder="Enter Your date of birth"
                        id="dob"
                        name="dob"
                        required={true}
                        value={values.dob}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="dob" className="form-label">
                        date of birth
                      </label>
                    </div>
                    <div className="row py-3">
                      <button type="submit" className="btn btn-outline-primary">
                        Signup
                      </button>
                    </div>
                    <div>
                      <p className="py-3 text-secondary">
                        already have an account?{" "}
                        <a className="px-2" href="/">
                          Login
                        </a>
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
