import { useFormik } from "formik";
import pageSchema from "./Schema/page";
import axios from "axios";

const CreatePage = () => {
  const initialValues = {
    project_name: "",
    project_content: "",
  };
  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: pageSchema,
      onSubmit: async (values) => {
        await axios
          .get("http://localhost:3002/user/createpage", {
            params: {
              name: values.project_name,
              content: values.project_content,
            },
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
                  Create a New Project
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="row form-floating mb-3">
                        <input
                          className="form-control"
                          type="name"
                          name="project_name"
                          placeholder="Project Name"
                          id="project_name"
                          value={values.project_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="project_name" className="form-label">
                          Project Name
                        </label>
                        {errors.project_name && touched.project_name ? (
                          <p className="text-danger form-error">
                            {errors.project_name}
                          </p>
                        ) : null}
                      </div>
                      <div className="row form-floating mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="project_content"
                          placeholder="Project content"
                          id="project_content"
                          value={values.project_content}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="project_content" className="form-label">
                          Project Content
                        </label>
                        {errors.project_content && touched.project_content ? (
                          <p className="text-danger form-error">
                            {errors.project_content}
                          </p>
                        ) : null}
                      </div>
                      <div className="row justify-content-center py-1">
                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-md"
                        >
                          create
                        </button>
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
};

export default CreatePage;
