export const DateConverter = (timestamp) => {
  const time = new Date(timestamp * 1000);
  const year = time.getFullYear();
  const month = time.toLocaleString('en', { month: 'short' });
  const date = time.getDate();
  return `${year}-${month}-${date}`;
};
