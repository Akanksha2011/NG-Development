function formatDateWithSlashes(date) {
    const day = date.getDate().toString().padStart(2, '0'); // Gets day and pads with leading zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Gets month (0-indexed) and pads with leading zero
    const year = date.getFullYear(); // Gets full year
  
    return `${month}/${day}/${year}`; // Returns formatted date in MM/DD/YYYY format
  }
  
  function printDate12DaysAhead() {
    const currentDate = new Date(); // Gets the current date
    currentDate.setDate(currentDate.getDate() + 12); // Adds 12 days to the current date
  
    const formattedDate = formatDateWithSlashes(currentDate); // Formats the date with slashes
    console.log(formattedDate); // Prints the formatted date
  }
  
  // Example usage:
  printDate12DaysAhead();
  