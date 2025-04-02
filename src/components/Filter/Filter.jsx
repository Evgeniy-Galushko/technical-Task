import s from "./Filter.module.css";
import { Field, Form, Formik } from "formik";

export default function Filter({ brands }) {
  const initialValues = {
    level: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field as="select" name="level">
            <option>Choose a brand</option>
            {brands.map((brend) => {
              return <option value={brend}>{brend}</option>;
            })}
            {/* <option>Choose a brand</option> */}
          </Field>
          <button>click</button>
        </Form>
      </Formik>
    </div>
  );
}
