import Input from "../../../../ui/Input";

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
