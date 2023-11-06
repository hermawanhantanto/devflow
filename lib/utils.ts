import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000, "month"],
    [604800, "week"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];

  for (let i = 0; i < intervals.length; i++) {
    const [intervalInSeconds, label] = intervals[i];
    const interval = Math.floor(seconds / intervalInSeconds);
    if (interval > 1) {
      return `${interval} ${label}s ago`;
    } else if (interval === 1) {
      return `1 ${label} ago`;
    }
  }

  return "just now";
}

export function formatNumber(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "m views";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "k views";
  } else {
    return views + " views";
  }
}
