import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Wrong number format. Use XXX-YY-ZZ")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.input} id={nameId} name="name"></Field>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={phoneId}>Number</label>
        <Field className={css.input} id={phoneId} name="number"></Field>
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.buttonSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
