/**
 * Formats time in milliseconds to minutes: seconds
 */

export function formatDuration(duration) {
  const hours = Math.floor(duration / 3600000); // Divide by 3,600,000 to get hours
  const minutes = Math.floor((duration % 3600000) / 60000); // Get the remaining minutes
  const seconds = Math.floor((duration % 60000) / 1000); // Get the remaining seconds

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
/**
 * Formats utc date to a DD/MM/YYY/ date
 */

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
