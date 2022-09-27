export const timeAgo = (timePosted) => {
  const seconds = Math.floor((new Date() - new Date(timePosted)) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const date = new Date(timePosted);

  if (seconds < 5) {
    return "now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return "about a minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 1.5) {
    return "about an hour ago";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 28) {
    return `${days} days ago`;
  } else {
    return `${date.toLocaleDateString("en-gb", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }
};
