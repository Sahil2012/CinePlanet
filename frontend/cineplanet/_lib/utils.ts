export const getInitials = (name?: string | null) => {
  if (!name) return "?";

  const [firstName, lastName] = name.split(" ");
  return `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ""}`;
};

export const joinWithSlash = (
  values: string[] | undefined,
  numberOfValues: number
) => {
  if (!values) {
    return null;
  }

  const valuesToJoin = values.slice(0, numberOfValues);
  return valuesToJoin.join("/");
};
