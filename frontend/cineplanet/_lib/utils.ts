import { add, format, isAfter, isBefore, isToday, isTomorrow } from "date-fns";

/**
 * Get the initials of a name for avatar
 * @param name 
 * @returns 
 */
export const getInitials = (name?: string | null) => {
  if (!name) return "?";

  const [firstName, lastName] = name.split(" ");
  return `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ""}`;
};

/**
 * Join an array of strings with slash upto a given number
 * @param values 
 * @param numberOfValues 
 * @returns 
 */
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

/**
 * Group an array of objects by a key
 * @param array 
 * @param key 
 * @returns 
 */
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

/**
 * Get today's epoch value with time removed
 * @returns 
 */
export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.valueOf();
};

/**
 * Remove time from a date (set time to 00:00:00.000)
 * @param date 
 * @returns 
 */
export const removeHours = (date: number) => {
  const dateObj = new Date(date);
  dateObj.setHours(0, 0, 0, 0);
  return dateObj;
};

/**
 * Get displayable string value of a date
 * @param date 
 * @returns 
 */
export const getDate = (date: number) => {
  if (isToday(date)) {
    return "Today";
  }
  if (isTomorrow(date)) {
    return "Tomorrow";
  }
  return format(date, "MMM dd");
};

/**
 * Get displayable string value of time
 * @param date 
 * @returns 
 */
export const getTime = (date: number) => {
  return format(date, "hh:mm a");
};

/**
 * Check if date is valid for show booking.
 * - Should be a valid date string
 * - Should be today or after today
 * - Should be before 7 days from today
 * @param date 
 * @returns 
 */
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
