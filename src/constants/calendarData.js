function getDaysInMonth (month) {
  let dt = new Date();
  let year = dt.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth;
}

const calendar = {
  days: [
    'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'
  ],
  monthsMaxDays: [
    {
      index: 1,
      month: 'January',
      monthShort: 'Jan',
      days: getDaysInMonth(1)
    },
    {
      index: 2,
      month: 'February',
      monthShort: 'Feb',
      days: getDaysInMonth(2)
    },
    {
      index: 3,
      month: 'March',
      monthShort: 'Mar',
      days: getDaysInMonth(3)
    },
    {
      index: 4,
      month: 'April',
      monthShort: 'Apr',
      days: getDaysInMonth(4)
    },
    {
      index: 5,
      month: 'May',
      monthShort: 'May',
      days: getDaysInMonth(5)
    },
    {
      index: 6,
      month: 'June',
      monthShort: 'Jun',
      days: getDaysInMonth(6)
    },
    {
      index: 7,
      month: 'July',
      monthShort: 'Jul',
      days: getDaysInMonth(7)
    },
    {
      index: 8,
      month: 'August',
      monthShort: 'Aug',
      days: getDaysInMonth(8)
    },
    {
      index: 9,
      month: 'September',
      monthShort: 'Sept',
      days: getDaysInMonth(9)
    },
    {
      index: 10,
      month: 'October',
      monthShort: 'Oct',
      days: getDaysInMonth(10)
    },
    {
      index: 11,
      month: 'November',
      monthShort: 'Nov',
      days: getDaysInMonth(11)
    },
    {
      index: 12,
      month: 'December',
      monthShort: 'Dec',
      days: getDaysInMonth(12)
    },
  ]
}
console.log(calendar.monthsMaxDays);
export default calendar;
