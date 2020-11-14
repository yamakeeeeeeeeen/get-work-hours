export const calcTime = (fromTime: string, toTime: string) => {
  const [fromHours, fromMinutes] = fromTime.split(':');
  const [toHours, toMinutes] = toTime.split(':');

  // NOTE: 時間を分計算にする
  const numFromMinutes = Number(fromHours) * 60 + Number(fromMinutes);
  const numToMinutes = Number(toHours) * 60 + Number(toMinutes);

  return numToMinutes - numFromMinutes;
};
