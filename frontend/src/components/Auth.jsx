import React from "react";
import {Formik, Form} from "formik";
import YupPassword from "yup-password";
import Input from "../ui/Input";
import * as Yup from "yup";
import axios from "axios";

YupPassword(Yup);

// TO DO for auth const password = Yup.string()
//   .password()
//   .min(
//     8,
//     "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number"
//   )
//   .minLowercase(1, "Password must contain at least 1 lower case letter")
//   .minUppercase(1, "Password must contain at least 1 upper case letter")
//   .minNumbers(1, "Password must contain at least 1 number");

const validationSchema = Yup.object({
  userName: Yup.string("Enter your UserName").required("User name is required"),
  password: Yup.string("Enter your password").required("Password is required"),
});

const AuthPage = () => {
  const initialFormValues = {
    userName: "",
    password: "",
  };

  return (
    <div className="bg-gray-200 font-sans text-gray-700 w-full mx-auto h-screen">
      <div className="max-w-md w-full mx-auto p-8">
        <h1 className="text-4xl text-center mb-8 font-thin">Login page</h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <section className="p-8">
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
                <article className="mb-5">
                  <Input name="userName" type="text" label="User Name" />
                </article>

                <article className="mb-5">
                  <Input name="password" type="password" label="Password" />
                </article>
                <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow"
                >
                  Login
                </button>
              </Form>
            </Formik>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
