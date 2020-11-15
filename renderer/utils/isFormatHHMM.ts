/**
 * 文字列が時間形式(hh:mm)かどうかを判定する
 * @param str
 */
export const isFormatHHMM = (str: string) => {
  const fmt = RegExp('^([0-1][0-9]|2[0-3]):([0-5][0-9])$');
  return fmt.test(str);
};
