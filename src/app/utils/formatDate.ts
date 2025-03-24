export function formatDate(date: string = new Date().toISOString().split("T")[0], includeRelative = false) {
  const currentDate = new Date();

  // Ensure date format consistency
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  
  if (isNaN(targetDate.getTime())) {
    return "Invalid Date";
  }

  // Compute time differences in milliseconds
  const diffInMs = currentDate.getTime() - targetDate.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  let formattedDate = "Today";

  if (diffInDays > 0) {
    if (diffInDays >= 365) {
      formattedDate = `${Math.floor(diffInDays / 365)}y ago`;
    } else if (diffInDays >= 30) {
      formattedDate = `${Math.floor(diffInDays / 30)}mo ago`;
    } else {
      formattedDate = `${diffInDays}d ago`;
    }
  } else if (diffInDays < 0) {
    const futureDays = Math.abs(diffInDays);
    if (futureDays >= 365) {
      formattedDate = `in ${Math.floor(futureDays / 365)}y`;
    } else if (futureDays >= 30) {
      formattedDate = `in ${Math.floor(futureDays / 30)}mo`;
    } else {
      formattedDate = `in ${futureDays}d`;
    }
  }

  // Format full date (e.g., "March 24, 2025")
  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate;
}