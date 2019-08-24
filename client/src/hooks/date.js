const dateConverter = date => {
  let monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  let d = new Date(date);
  let curDate;
  curDate = `${monthArr[d.getMonth()]} ${d.getDate()},  ${d.getFullYear()} `;

  return curDate;
};

export default dateConverter;
