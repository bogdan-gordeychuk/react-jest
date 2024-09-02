export function parseDate(date: unknown): {
  year: number;
  month: number;
  day: number;
} {
  if (date instanceof Date && !isNaN(date.getTime())) {
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    return { year, month, day };
  } else throw new Error("invalid input!");
}
