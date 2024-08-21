import { useMemo } from 'react';

const useTruncateText = (text?: string, startChars = 5, endChars = 5) => {
  const truncate = (str: string) => {
    if (str.length <= startChars + endChars) {
      return str;
    }
    return `${str.substring(0, startChars)}...${str.substring(str.length - endChars)}`;
  };

  const truncatedText = useMemo(() => {
    if (text !== undefined) {
      return truncate(text);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return { truncatedText, truncate };
};

export default useTruncateText;
