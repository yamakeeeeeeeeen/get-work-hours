import { Duration } from 'luxon';
import { timeSplit } from '~/utils/timeSplit';
import { convertToHourAndMinute } from '~/utils/convertToHourAndMinute';

export const getWorkingTime = (times: { start: string; end: string }[]) => {
  const NO_BREAK = times.length === 1;
  // // 初めに着席した時間から最後に離席した時間を算出
  const total_time = getTotalTime(times);
  // 合計稼働時間を算出
  const total_uptime = getTotalUptime(times);
  // 合計休憩時間を算出
  const total_breakTime = NO_BREAK ? 60 : total_time - total_uptime;

  return {
    uptime: convertToHourAndMinute(total_uptime),
    breakTime: convertToHourAndMinute(total_breakTime),
  };
};

/**
 * 最初に着席した時間から最後に離席した時間までの合計値を返す ※単位(分)
 * @param times 稼働データ
 */
const getTotalTime = (times: { start: string; end: string }[]): number => {
  // 初めに着席した時間から最後に離席した時間を算出
  const first_obj = times[0].start;
  const last_obj = times[times.length - 1].end;

  const [first_hour, first_minute] = timeSplit(first_obj);
  const [last_hour, last_minute] = timeSplit(last_obj);
  const first = Duration.fromObject({ hour: Number(first_hour), minute: Number(first_minute) }).as('minute');
  const last = Duration.fromObject({ hour: Number(last_hour), minute: Number(last_minute) }).as('minute');

  return last - first; // 初めに着席した時間から最後に離席した時間
};

/**
 * 合計稼働時間を返す ※単位(分)
 * @param times 稼働データ
 */
const getTotalUptime = (times: { start: string; end: string }[]): number => {
  const NO_BREAK = times.length === 1;
  let total_uptime = 0; // 合計稼働時間

  times.forEach((time) => {
    const [startHour, startMinute] = timeSplit(time.start);
    const [endHour, endMinute] = timeSplit(time.end);

    const start = Duration.fromObject({ hour: Number(startHour), minute: Number(startMinute) });
    const end = Duration.fromObject({ hour: Number(endHour), minute: Number(endMinute) });
    const uptime = end.as('minute') - start.as('minute');

    total_uptime += uptime;
  });

  // 休憩していない場合は60分休憩する
  if (NO_BREAK) {
    total_uptime -= 60;
  }

  return total_uptime;
};
