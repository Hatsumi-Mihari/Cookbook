export const secondsToMs = (seconds: number): number => seconds * 1000;
export const msToSeconds = (ms: number): number => Math.floor(ms / 1000);
export const formatMsToTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return hours > 0 
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` 
    : `${pad(minutes)}:${pad(seconds)}`;
};