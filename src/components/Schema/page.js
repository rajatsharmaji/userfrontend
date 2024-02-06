import * as Yup from "yup";

const pageSchema = Yup.object().shape({
  project_name: Yup.string()
    .min(2)
    .max(20)
    .required("Please provide project name"),
  project_content: Yup.string()
    .min(10)
    .max(150)
    .required("Please provide project content"),
});

export default pageSchema;
