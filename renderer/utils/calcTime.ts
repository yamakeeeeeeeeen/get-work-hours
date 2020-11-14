import { convertToMinute } from '~/utils/convertToMinute';

export const calcTime = (fromTime: string, toTime: string) => {
  const [fromHours, fromMinutes] = fromTime.split(':');
  const [toHours, toMinutes] = toTime.split(':');

  // NOTE: 時間を分計算にする
  const numFromMinutes = convertToMinute(fromHours, fromMinutes);
  const numToMinutes = convertToMinute(toHours, toMinutes);

  return numToMinutes - numFromMinutes;
};
