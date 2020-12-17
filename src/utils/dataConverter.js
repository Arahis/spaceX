import dayjs from "dayjs";

export const dataConverter = (value) => {
  let newDate = dayjs(value).format("HH:mm:ssA YYYY");
  let convertedDate = `${newDate} (UTC)`;

  return convertedDate;
};
