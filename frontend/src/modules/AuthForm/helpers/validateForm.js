import * as Yup from "yup";
import YupPassword from "yup-password";

// TO DO for auth const password = Yup.string()
//   .password()
//   .min(
//     8,
//     "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number"
//   )
//   .minLowercase(1, "Password must contain at least 1 lower case letter")
//   .minUppercase(1, "Password must contain at least 1 upper case letter")
//   .minNumbers(1, "Password must contain at least 1 number");s

YupPassword(Yup);

const validationSchema = Yup.object({
    userName: Yup.string("Enter your UserName").required("User name is required"),
    password: Yup.string("Enter your password").required("Password is required"),
});

export default validationSchema;