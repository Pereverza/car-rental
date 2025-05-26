export const formatCarId = (id: string): string => {
  if (id.length > 6) {
    return `ID: ${id.slice(0, 6)}...`;
  } else {
    return `ID: ${id}`;
  }
};
