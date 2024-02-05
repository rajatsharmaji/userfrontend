function Login() {
  return (
    <>
      <section class="bg-light vh-100 py-5">
        <div className="container w-25">
          <div className="row justify-content-center align-content-center">
            <div class="card border border-light-subtle rounded-3 shadow-sm">
              <div class="card-body p-xl-5">
                <div className="text-secondary mb-4 text-center">
                  Sign in to your account
                </div>
                <form action="">
                  <div class="row gy-2 overflow-hidden">
                    <div class="col-12">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
