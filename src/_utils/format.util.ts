export const dateFormat = (date: string) => {
  if (!date) return;

  return date.split("T")[0];
};
