import React, {useContext} from "react";
import {Formik, Form} from "formik";
import AuthContext from "../../../../context/auth-context";
import {FormContainer} from "./FormContainer";
import validationSchema from "../../helpers/validateForm";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Alert from "../../../../components/Error/AlertError";
import { Button } from "../../../../components/ui/Button";
import {useEffect} from "react";

//ToDo из пропсов
const getPageState = (pageState) => {
  if (pageState === "login") {
    return <Login />;
  }
  return <Registration />;
};

export const AuthForm = (props) => {
  const [currPageState] = React.useState(props.pageState);
  const [errorText, setError] = React.useState(null);
  const {onLogin, error} = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      setError(error);
    }
  }, [error]);

  const initialFormValues = {
    userName: "",
    password: "",
  };

  const submitHandler = (values) => {
    onLogin(values.userName, values.password);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitHandler(values)}
      >
        <Form>
          {getPageState(currPageState)}
         <Button text="Login"/>
        </Form>
      </Formik>
      {errorText && <Alert error={errorText} />}
    </FormContainer>
  );
};

//ToDo структура в pages, modules изолированные

