const milliseconds = 1646511200000; // Example timestamp in milliseconds

// Create a Date object from the milliseconds
const dateObject = new Date(milliseconds);

// Convert the Date object to a formatted string using toLocaleString()
const dateString = dateObject.toLocaleString();

console.log(dateString); // Output: "2024-03-06 11:40:00 AM"
