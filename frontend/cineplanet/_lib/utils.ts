import { add, isAfter, isBefore } from "date-fns";

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

export const groupBy = <T extends Record<string, any>>(
  array: T[],
  key: string
): Record<string, T[]> => {
  return array.reduce<Record<string, T[]>>((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.valueOf();
};

export const removeHours = (date: number) => {
  const dateObj = new Date(date);
  dateObj.setHours(0, 0, 0, 0);
  return dateObj;
};

export const isDateValid = (date?: string) => {
  if (date) {
    const parsedDate = removeHours(Date.parse(date)).valueOf();
    if (
      isNaN(parsedDate) ||
      isBefore(parsedDate, removeHours(getToday())) ||
      isAfter(parsedDate, add(getToday(), { days: 7 }))
    ) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};
