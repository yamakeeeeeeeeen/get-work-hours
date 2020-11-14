const MINUTE_OF_AN_HOUR = 60;

export const convertToMinute = (hour: string, minute?: string) => {
  if (minute) {
    return Number(hour) * MINUTE_OF_AN_HOUR + Number(minute);
  }
  return Number(hour) * MINUTE_OF_AN_HOUR;
};
