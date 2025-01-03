export default function parseFormattedHour(start: Date, end: Date): string {
  const milli = end.getTime() - start.getTime();

  let h = Math.floor(milli / 1000 / 60 / 60);
  let m = Math.floor((milli / 1000 / 60 / 60 - h) * 60);
  let s = Math.floor(((milli / 1000 / 60 / 60 - h) * 60 - m) * 60);

  return `${getTimeString(h)}:${getTimeString(m)}:${getTimeString(s)}`;
}

function getTimeString(time: number) {
  if (time === 0) {
    return '00';
  } else if (time > 0 && time < 10) {
    return '0' + time;
  } else {
    return time.toString();
  }
}
