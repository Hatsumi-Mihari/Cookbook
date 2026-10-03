export const genNumericId = (): number => {
  return Date.now() + Math.floor(Math.random() * 10000);
};