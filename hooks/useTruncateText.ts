const useTruncateText = (
  text: string,
  startChars = 5,
  endChars = 5
): string => {
  if (text.length <= startChars + endChars) {
    return text;
  }
  return `${text.substring(0, startChars)}...${text.substring(
    text.length - endChars
  )}`;
};

export default useTruncateText;
