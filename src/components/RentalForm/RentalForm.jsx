import { Field, Form, Formik } from "formik";
import s from "./RentalForm.module.css";

export default function RentalForm() {
  const initialValues = {
    level: "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field as="select" name="level">
          <option>Choose a brand</option>
          {brands.map((brend, index) => {
            return (
              <option key={index} value={brend}>
                {brend}
              </option>
            );
          })}
          {/* <option>Choose a brand</option> */}
        </Field>
        <button>click</button>
      </Form>
    </Formik>
  );
}
