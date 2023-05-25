import Input from "../../../../components/ui/Input";
import React from "react";

const Login = () => {
  return (
    <>
      <article className="mb-5">
        <Input name="userName" type="text" label="User Name" />
      </article>

      <article className="mb-5">
        <Input name="password" type="password" label="Password" />
      </article>
    </>
  );
};

export default Login;
