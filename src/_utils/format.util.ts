/**
 * yyyy-MM-dd 형식으로 변경한다.
 */
export const formatDate = (date: string) => {
  if (!date) return;

  return date.split("T")[0];
};


/**
 * 01088889999 -> 010-8888-9999로 변경한다.
 */
export function formatHyphenPhone(phone: string) {
  return phone.replace(/^(\d{3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
}
