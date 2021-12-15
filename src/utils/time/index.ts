export function msToHMS(ms: number) {
  // 1- Convert to seconds:
  let seconds = ms / 1000;
  // 2- Extract hours:
  const numHours = Math.floor(seconds / 3600);
  const hours = numHours ? numHours.toString() + ':' : '';
  seconds = seconds % 3600; // seconds remaining after extracting hours
  // 3- Extract minutes:
  const minutes = Math.floor(seconds / 60).toString(); // 60 seconds in 1 minute
  // 4- Keep only seconds not extracted to minutes:
  const secondsNum = Math.floor(seconds % 60).toString();
  const secondString = secondsNum.length === 1 ? '0' + secondsNum : secondsNum;

  return hours + minutes + ':' + secondString;
}

export function formatDate(data: string) {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getUTCFullYear();

  return `${day}/${month + 1}/${year}`;
}
