import { FRACTIONS_OF_AN_HOUR } from '~/constants';

/**
 * 合計時間をn時間m分に変換して返す
 * @param totalMinute 合計時間 ※単位(分)
 */
export const convertToHourAndMinute = (totalMinute: number) => {
  const hour = Math.floor(totalMinute / FRACTIONS_OF_AN_HOUR);
  const minute = totalMinute % FRACTIONS_OF_AN_HOUR;

  return {
    hour,
    minute,
  };
};
