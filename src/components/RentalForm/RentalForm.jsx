import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import s from "./RentalForm.module.css";
import Calendar from "../../components/Calendar/Calendar.jsx";

export default function RentalForm() {
  const dateId = useId();
  const [calendars, setCalendars] = useState(false);
  const [dayOfMonth, setDayOfMonth] = useState("");
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  const handleSubmit = (values, actions) => {
    values.bookingDate = dayOfMonth;
    console.log(values);
    actions.resetForm();
  };

  const condition = {
    name: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  };

  const pattern = Yup.object().shape({
    name: Yup.string().matches(condition.name).required("*"),
    email: Yup.string().matches(condition.email, "Too Short!").required("*"),
  });

  const hendleClick = () => {
    setCalendars(true);
  };

  return (
    <div className={s.boxForm}>
      <h3 className={s.formTitle}>Book your car now</h3>
      <p className={s.formParagraph}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={s.errorName} />
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage
            name="email"
            component="span"
            className={s.errorEmail}
          />
          <Field
            className={s.inputDate}
            type="button"
            name="bookingDate"
            value={dayOfMonth.length === 0 ? "Booking date" : dayOfMonth}
            onClick={hendleClick}
          />

          <Field
            className={s.textarea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <button className={s.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
      {calendars && (
        <Calendar setDayOfMonth={setDayOfMonth} setCalendars={setCalendars} />
      )}
    </div>
  );
}
