import toDate from '../toDate/index'

/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a decade
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */
export default function lastDayOfDecade<DateType extends Date>(
  date: DateType | number
): DateType {
  const _date = toDate(date)
  const year = _date.getFullYear()
  const decade = 9 + Math.floor(year / 10) * 10
  _date.setFullYear(decade + 1, 0, 0)
  _date.setHours(0, 0, 0, 0)
  return _date
}
