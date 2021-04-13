/** @format */

import { Field, Form } from "formik";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  height: 100%;
  @media screen and (max-width: 540px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 420px) {
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 70vh;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 24px 10px rgba(15, 193, 107, 0.3);
  @media screen and (max-width: 1025px) {
    width: 70%;
  }
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  background: transparent;
  border: 0px;
  border-bottom: 1px solid rgba(15, 193, 107);
  outline: none;
  padding: 10px;
  color: #c5ecfd;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  ${({ istextarea }) =>
    istextarea === "true" &&
    css`
      border: 2px solid rgba(15, 193, 107);
      resize: none;
      height: 200px;
    `}
`;
export const StyledH2 = styled.h2`
  color: rgba(15, 193, 107);
  text-align: center;
  margin-bottom: 25px;
`;

export const StyledErrorMessageWrapper = styled.div`
  color: crimson;
  margin: 5px 0;
`;
export const FormButton = styled.button`
  display: flex;
  margin: auto;
  padding: 10px 15px;
  background: transparent;
  color: bisque;
  border: 1px solid rgba(15, 193, 107);
  border-radius: 10px;
`;
