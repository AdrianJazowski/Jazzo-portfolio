/** @format */

import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  StyledField,
  StyledErrorMessageWrapper,
  StyledForm,
  StyledH2,
  Wrapper,
  FormButton,
} from "./ContactStyles";

const contactFormSchema = Yup.object().shape({
  userName: Yup.string().required("enter your name!").min(3, "too short name"),
  userEmail: Yup.string().email("invalid email!").required("enter your email"),
  message: Yup.string()
    .required("enter your message")
    .min(5, "type a longer message"),
  // acceptTerms: Yup.bool().oneOf([true], "accept terms!"),
});

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values) => {
          emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_TEMPLATE,
            values,
            process.env.REACT_APP_EMAIL_USER
          );
        }}
      >
        {({ values }) => (
          <StyledForm>
            <StyledH2>Napisz do mnie</StyledH2>
            <StyledField
              id="userName"
              name="userName"
              value={values.userName}
              type="text"
              placeholder="Type your name..."
              autoComplete="off"
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="userName" />
            </StyledErrorMessageWrapper>

            <StyledField
              id="userEmail"
              name="userEmail"
              value={values.userEmail}
              type="email"
              autoComplete="off"
              placeholder="Type your email..."
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="userEmail" />
            </StyledErrorMessageWrapper>

            <StyledField
              id="message"
              name="message"
              placeholder="type your message..."
              component="textarea"
              istextarea="true"
              value={values.message}
            />
            <StyledErrorMessageWrapper>
              <ErrorMessage name="message" />
            </StyledErrorMessageWrapper>

            <FormButton submitInForm type="submit">
              send
            </FormButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;
