export default function formatWorkshopDate(workshopDate: any){
    let date = new Date(workshopDate);

  // Define an array of weekday names
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Define an array of month names
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Function to convert date to nth format
  function getNth(day: any) {
    if (day % 10 === 1 && day !== 11) {
      return day + 'st';
    }
    if (day % 10 === 2 && day !== 12) {
      return day + 'nd';
    }
    if (day % 10 === 3 && day !== 13) {
      return day + 'rd';
    }
    return day + 'th';
  }

  // Function to convert 24-hour format to 12-hour format
  function formatAMPM(date: any) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  // Format the start time
  let startTime = formatAMPM(date);
  let endDate = new Date(date.getTime() + 30*60000);

  // Add 30 minutes to the date
  // Format the end time
  let endTime = formatAMPM(endDate);

  // Format the date
  let formattedDate =
    weekdays[date.getUTCDay()] +
    ', ' +
    months[date.getUTCMonth()] +
    ' ' +
    getNth(date.getUTCDate()) +
    ', ' +
    date.getUTCFullYear();


  return {formattedDate, startTime, endTime}
}