export const validateDays = (value: string): boolean => {
  const day = Number(value);
  if (isNaN(day)) return false;

  if (day > 31 || day < 1) return false;

  return true;
};

export const validateMonth = (value: string): boolean => {
  const Month = Number(value);
  if (isNaN(Month)) return false;

  if (Month > 12 || Month < 1) return false;

  return true;
};

export const validateDayAndMonth = (days: string, months: string) => {
  const day = Number(days);
  const month = Number(months);
  if (isNaN(day) || isNaN(month)) return false;

  const year = new Date().getFullYear();
  const date = new Date(year, month - 1, day);
  if (date.getMonth() + 1 !== month) return false;

  return true;
};

export const validateHours = (value: string): boolean => {
  const hour = Number(value);
  if (isNaN(hour)) return false;

  if (hour > 23 || hour < 1) return false;

  return true;
};

export const validateMinute = (value: string): boolean => {
  const minute = Number(value);
  if (isNaN(minute)) return false;

  if (minute > 59 || minute < 0) return false;

  return true;
};

export const validateWhichYearTheDateRefers = (month: string): number => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  return currentMonth > Number(month) - 1 ? currentYear + 1 : currentYear;
};

export const validateDescription = (value: string): boolean => {
  if (value.length > 100) return false;
  return true;
};
