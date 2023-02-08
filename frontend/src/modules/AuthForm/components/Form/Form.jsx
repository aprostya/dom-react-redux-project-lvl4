import React, {useContext} from "react";
import {Formik, Form} from "formik";
import AuthContext from "../../../../context/auth-context";
import {FormContainer} from "./FormContainer";
import validationSchema from "../../helpers/validateForm";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Alert from "../../../../components/Error/AlertError";
import {useEffect} from "react";

//ToDo из пропсов
const getPageState = (pageState) => {
  if (pageState === "login") {
    return <Login />;
  }
  return <Registration />;
};

const AuthForm = (props) => {
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
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
          >
            Login
          </button>
        </Form>
      </Formik>
      {errorText && <Alert error={errorText} />}
    </FormContainer>
  );
};

//ToDo структура в pages, modules изолированные

export default AuthForm;
