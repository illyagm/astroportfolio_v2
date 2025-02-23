export const truncateText = (text: string, maxLength: number) => {
  const truncated =
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return truncated;
};
