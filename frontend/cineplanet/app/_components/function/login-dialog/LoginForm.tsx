import { FaLock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { z } from "zod";
import Form from "../../ui/Form";

const LoginForm = () => {
  return (
    <Form
      schema={z.object({
        email: z.string().email({ message: "Invalid Email" }),
        password: z
          .string()
          .regex(/^\S*$/, "Password must not contain any whitespace.") // No spaces, tabs, etc.
          .min(8, { message: "Password must contain atleast 8 character(s)" })
          .max(20, { message: "Password should not exceed 20 character(s)" }),
      })}
      fields={[
        {
          name: "email",
          placeholder: "Email",
          icon: <IoMdMail size="1.1rem" />,
        },
        {
          name: "password",
          placeholder: "Password",
          icon: <FaLock />,
          type: "password",
        },
      ]}
      submitLabel="Login"
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};

export default LoginForm;
