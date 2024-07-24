function convertDate(inputDate) {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]}, ${year}`;
}

export default convertDate;
