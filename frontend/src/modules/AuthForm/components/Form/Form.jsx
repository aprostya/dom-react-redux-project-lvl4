import React, {useContext} from "react";
import {Formik, Form} from "formik";
import AuthContext from "../../../../context/auth-context";
import {FormContainer} from "./FormContainer";
import validationSchema from "../../helpers/validateForm";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import {useNavigate} from "react-router-dom";
import axios from "axios";

//ToDo из пропсов
const getPageState = (pageState) => {
  if (pageState === "login") {
    return <Login />;
  }
  return <Registration />;
};

const AuthPage = (props) => {
  const [currPageState, setCurrPageState] = React.useState(props.pageState);
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn, "isLoggedIn");

  const initialFormValues = {
    userName: "",
    password: "",
  };

  const submitHandler = (values) => {
    authCtx.onLogin(values.userName, values.password);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitHandler(values)}
        // todo - перенести асинковую логику в редакс
        // axios
        //   .post("/api/v1/login", {
        //     username: values.userName,
        //     password: values.password,
        //   })
        //   .then((response) => {
        //     console.log(response.data); // => { token: ..., username: 'admin' }
        //   });
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
