import React from "react";
import {Formik, Form} from "formik";
import {FormContainer} from "./FormContainer";
import validationSchema from "../../helpers/validateForm";
import Login from "../Login/Login";
import axios from "axios";

const getPageState = (pageState) => {
  if (pageState === "login") {
    return <Login />;
  }
  return <div></div>;
};

const AuthPage = () => {
  const [currPageState, setCurrPageState] = React.useState("login");

  const initialFormValues = {
    userName: "",
    password: "",
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // todo - перенести асинковую логику в редакс
          axios
            .post("/api/v1/login", {
              username: values.userName,
              password: values.password,
            })
            .then((response) => {
              console.log(response.data); // => { token: ..., username: 'admin' }
            });
        }}
      >
        <Form>
          {getPageState(currPageState)}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
          >
            Login
          </button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

//ToDo структура в pages, modules изолированные

export default AuthPage;
