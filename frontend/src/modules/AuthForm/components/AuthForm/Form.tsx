import React, { useContext } from "react";
import { Formik, Form } from "formik";
import AuthContext from "../../../../context/auth-context";
import { FormContainer } from "./FormContainer";
import validationSchema from "../../helpers/validateForm";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Alert from "../../../../components/Error/AlertError";
import { Button } from "../../../../components/ui/Button";
import { useEffect } from "react";
import { PageStates } from "../../../../utils/enums";

const initialFormValues = {
    userName: "",
    password: "",
};

//ToDo из пропсов
const getPageState = (pageState: PageStates) => {
    if (pageState === "login") {    
        return <Login />;
    }
    return <Registration />;
};

export const AuthForm = (props: any) => {
    const [currPageState] = React.useState(props.pageState);
    const [errorText, setError] = React.useState(null);
    const { onLogin, error } = useContext(AuthContext);

    useEffect(() => {
        if (error) {
            setError(error);
        }
    }, [error]);

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
                    <Button text="Login" />
                </Form>
            </Formik>
            {errorText && <Alert error={errorText} />}
        </FormContainer>
    );
};
