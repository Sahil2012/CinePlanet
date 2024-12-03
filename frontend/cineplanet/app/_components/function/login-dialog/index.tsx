import {
  Badge,
  Box,
  Button,
  Dialog,
  Flex,
  SegmentedControl,
  Separator,
} from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { ReactNode, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type Action = "login" | "signup";

interface LoginDialogProps {
  trigger: ReactNode;
}

const LoginDialog = ({ trigger }: LoginDialogProps) => {
  const [action, setAction] = useState<Action>("login");

  const actionForm = action === "login" ? <LoginForm /> : <SignupForm />;

  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title align="center" size="7">
          Welcome!
        </Dialog.Title>

        <Flex justify="center" className="mb-4">
          <SegmentedControl.Root
            value={action}
            onValueChange={() => {
              setAction((prev) => (prev === "login" ? "signup" : "login"));
            }}
          >
            <SegmentedControl.Item value="login">Login</SegmentedControl.Item>
            <SegmentedControl.Item value="signup">
              Sign Up
            </SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex>
        {actionForm}
        <Separator my="7" size="4" className="relative w-full">
          <Badge
            size="3"
            className="absolute -top-3 left-[47%] !bg-[var(--color-panel-solid)]"
          >
            or
          </Badge>
        </Separator>
        <Box>
          <Button
            onClick={() => signIn("google")}
            className="!w-full"
            variant="surface"
            size="3"
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default LoginDialog;
