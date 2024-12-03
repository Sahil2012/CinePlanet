import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Flex, TextField } from "@radix-ui/themes";
import { ReactNode, useState } from "react";
import {
  Path,
  SubmitHandler,
  useForm,
  UseFormWatch,
  ValidateResult,
} from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { z } from "zod";

interface Field<T extends z.ZodObject<z.ZodRawShape>> {
  name: keyof z.infer<T>;
  placeholder: string;
  icon?: ReactNode;
  type?:
    | "number"
    | "search"
    | "text"
    | "time"
    | "hidden"
    | "tel"
    | "url"
    | "email"
    | "date"
    | "password"
    | "datetime-local"
    | "month"
    | "week";
  validate?: (watch: UseFormWatch<z.infer<T>>, val: string) => ValidateResult;
}

interface FormProps<T extends z.ZodObject<z.ZodRawShape>> {
  schema: T;
  fields: Field<T>[];
  submitLabel: string;
  onSubmit: SubmitHandler<z.infer<T>>;
}

const Form = <T extends z.ZodObject<z.ZodRawShape>>({
  schema,
  fields,
  submitLabel,
  onSubmit,
}: FormProps<T>) => {
  // extract type from schema
  type FormType = z.infer<T>;

  const { register, handleSubmit, formState, watch } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const submitForm: SubmitHandler<FormType> = async (data) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      setIsSubmitting(false);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message);
    }
  };

  const errorMessage =
    error ?? Object.values(formState.errors)[0]?.message?.toString();

  return (
    <form onSubmit={handleSubmit(submitForm)} className="pt-1">
      {/* error callout */}
      {errorMessage && (
        <Callout.Root color="red" mb="3" role="alert" size="1">
          <Callout.Icon>
            <BiSolidError size="1.2rem" />
          </Callout.Icon>
          <Callout.Text>{errorMessage}</Callout.Text>
        </Callout.Root>
      )}

      {/* form fields */}
      <Flex direction="column" gap="3">
        {fields.map((field) => (
          <label key={field.name as string}>
            <TextField.Root
              {...register(field.name as Path<FormType>, {
                validate: (val) => field.validate?.(watch, val),
              })}
              size="3"
              placeholder={field.placeholder}
              color={formState.errors[field.name] ? "red" : "gray"}
              type={field.type}
            >
              {field.icon && <TextField.Slot>{field.icon}</TextField.Slot>}
            </TextField.Root>
          </label>
        ))}
        <Button size="3" type="submit" loading={isSubmitting}>
          {submitLabel}
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
