import { useId, useState } from "react";
import s from "./Filter.module.css";
import { Field, Form, Formik } from "formik";
import queryString from "query-string";

export default function Filter({ brands, setLine }) {
  const brandId = useId();
  const rentalPriceId = useId();
  const mileageId = useId();

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);

    const parsed = queryString.stringify(values);
    setLine(parsed);

    actions.resetForm();
  };

  return (
    <div className={s.filter}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formFilter}>
          <div className={s.divBox}>
            <label htmlFor={brandId} className={s.labelBox}>
              Car brand
            </label>
            <Field
              as="select"
              name="brand"
              id={brandId}
              className={s.boxSelect}
            >
              <option className={s.boxOption}>Choose a brand</option>
              {brands.map((brend, index) => {
                return (
                  <option className={s.boxOption} key={index} value={brend}>
                    {brend}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className={s.divBox}>
            <label htmlFor={rentalPriceId} className={s.labelBox}>
              Price/ 1 hour
            </label>
            <Field
              as="select"
              name="rentalPrice"
              id={rentalPriceId}
              className={s.boxSelect}
            >
              <option className={s.boxOption}>Choose a price</option>
              <option value="30" className={s.boxOption}>
                30
              </option>
              <option value="40" className={s.boxOption}>
                40
              </option>
              <option value="50" className={s.boxOption}>
                50
              </option>
              <option value="60" className={s.boxOption}>
                60
              </option>
              <option value="70" className={s.boxOption}>
                70
              </option>
              <option value="80" className={s.boxOption}>
                80
              </option>
            </Field>
          </div>
          <div className={s.divBox}>
            <label htmlFor={mileageId} className={s.labelBox}>
              Сar mileage / km
            </label>
            <div className={s.boxMileage}>
              <Field
                type="number"
                name="minMileage"
                id={mileageId}
                className={s.inputMinMileage}
              ></Field>
              {/* <span className={s.spanMinMileage}>From</span> */}
              <Field
                type="text"
                name="maxMileage"
                id={mileageId}
                className={s.inputMaxMileage}
              ></Field>
              {/* <span className={s.spanMaxMileage}>To</span> */}
            </div>
          </div>
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
