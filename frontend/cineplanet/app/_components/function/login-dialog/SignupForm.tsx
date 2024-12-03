import { FaLock, FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { z } from "zod";
import Form from "../../ui/Form";

const SignupForm = () => {
  return (
    <Form
      schema={z
        .object({
          name: z.string().min(1, { message: "Name is required" }).max(20),
          email: z.string().email({ message: "Invalid Email" }),
          password: z
            .string()
            .regex(/^\S*$/, "Password must not contain any whitespace.") // No spaces, tabs, etc.
            .min(8, { message: "Password must contain atleast 8 character(s)" })
            .max(20, { message: "Password should not exceed 20 character(s)" }),
          confirmPassword: z
            .string()
            .regex(/^\S*$/, "Password must not contain any whitespace.") // No spaces, tabs, etc.
            .min(8, { message: "Password must contain atleast 8 character(s)" })
            .max(20, { message: "Password should not exceed 20 character(s)" }),
        })
        .superRefine(({ confirmPassword, password }, ctx) => {
          if (confirmPassword !== password) {
            ctx.addIssue({
              code: "custom",
              message: "Passwords do not match",
              path: ["confirmPassword"],
            });
          }
        })}
      fields={[
        {
          name: "name",
          placeholder: "Name",
          icon: <FaUser size="1.1rem" />,
        },
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
        {
          name: "confirmPassword",
          placeholder: "Confirm Password",
          icon: <FaLock />,
          type: "password"
        },
      ]}
      submitLabel="Signup"
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
};

export default SignupForm;
