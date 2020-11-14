import { calcTime } from '~/utils/calcTime';

const convertTime = (time: number) => {
  const hour = Math.floor(time / 60);
  const minute = time % 60;

  return {
    hour,
    minute,
  };
};

export const getUptimeAndBreakTime = (workTimes: { start: string; end: string }[]) => {
  let allTime;
  let uptime = 0;
  let breakTime;

  // 合計時間を出す
  if (workTimes.length === 1) {
    const { start, end } = workTimes[0];
    allTime = calcTime(start, end);
  } else {
    const firstData = workTimes[0];
    const lastData = workTimes[workTimes.length - 1];
    allTime = calcTime(firstData.start, lastData.end);
  }

  // 稼働時間を出す
  if (workTimes.length === 1) {
    uptime = allTime - 60;
  } else {
    workTimes.forEach((time) => {
      const workingMinutes = calcTime(time.start, time.end);
      uptime += workingMinutes;
    });
  }

  // 休憩時間を出す
  if (workTimes.length === 1) {
    breakTime = 60;
  } else {
    breakTime = allTime - uptime;
  }

  return {
    uptime: convertTime(uptime),
    breakTime: convertTime(breakTime),
  };
};
