function Signup() {
  return (
    <>
      <section className="bg-light vh-100 py-5">
        <div className="container w-25 py-5">
          <div className="card">
            <div className="card-body">
              <div className="py-3 text-center text-secondary">
                create your account
              </div>
              <form>
                <div className="row gy-2 overflow-hidden">
                  <div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="name"
                        placeholder="Enter Your Name"
                        required="true"
                      ></input>
                      <label for="name" className="form-label">
                        username
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        id="email"
                        required="true"
                      />
                      <label for="email" className="form-label">
                        Email
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Your Password"
                        id="password"
                        required="true"
                      />
                      <label for="password" className="form-label">
                        Password
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"
                        required="true"
                      />
                      <label for="confirm-password" className="form-label">
                        Confirm Password
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="date"
                        placeholder="Enter Your date of birth"
                        id="dob"
                        required="true"
                      />
                      <label for="dob" className="form-label">
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
