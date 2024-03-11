export const formatDate = (date) => {
  if (date === '') return 'On course';
  const options = { month: 'long' };
  const [year, month] = date.split('-');
  const formattedMonth = new Date(`${month}`).toLocaleDateString(
    'en-US',
    options
  );
  return `${formattedMonth}, ${year}`;
};
