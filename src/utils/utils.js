export function limitedString(text, limit) {
  return (
    text
      .split(' ')
      .slice(0, limit ? limit : 10)
      .join(' ') + '...'
  );
}
