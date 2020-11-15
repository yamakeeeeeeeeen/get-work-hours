/**
 * 時分文字列(hh:mm)からミリ秒を算出して返す
 * 時分文字列形式ではなかった場合は0msを返す
 * @param hhmm
 */
export const timeStringToMs = (hhmm: string) => {
  //1h = 3600000ms
  //1m = 60000ms
  let ms = 0;
  const ret = hhmm.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/);
  if (ret != null) {
    ms = Number(ret[1]) * 3600000 + Number(ret[2]) * 60000;
  }
  return ms;
};
