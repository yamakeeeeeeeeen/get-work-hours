export const convertToHourAndMinute = (totalMinute: number) => {
  const hour = Math.floor(totalMinute / 60);
  const minute = totalMinute % 60;

  return {
    hour,
    minute,
  };
};
