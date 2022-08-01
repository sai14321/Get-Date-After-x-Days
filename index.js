const addDays = require("date-fns/addDays");

function days(Days) {
  const result = addDays(new Date(2020, 07, 22), Days);
  return result;
}
console.log(days(11));
