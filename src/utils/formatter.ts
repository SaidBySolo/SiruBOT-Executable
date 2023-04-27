import path from "path";
import { Track } from "shoukaku";
import {
  EMOJI_VOLUME_LOUD,
  EMOJI_VOLUME_SMALL,
  EMOJI_VOLUME_MUTE,
  PROGRESS_BAR_START_WHITE,
  PROGRESS_BAR_END_WHITE,
  PROGRESS_BAR_WHITE,
  PROGRESS_BAR_START_BLACK,
  PROGRESS_BAR_END_BLACK,
  PROGRESS_BAR_BLACK,
  PROGRESS_BAR_START_SINGLE_WHITE,
  PROGRESS_BAR_END_MIDDLE_WHITE,
} from "@/constants/message";
import { FormatTrackOptions } from "@/types/utils/formatter";
import { PROGRESS_BAR_EMOJI_COUNT } from "@/constants/utils/formatter";

/**
 * Convert seconds to readble format (like 00:00:00)
 */
export function humanizeSeconds(sec: number, ms?: boolean): string {
  if (ms) sec = sec / 1000;
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = Math.floor(sec % 60);

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v)) // Add leading zero if value is less than 10
    .filter((v, i) => v !== "00" || i > 0) // Remove leading zeros from the first value
    .join(":"); // Join the values with colon
}

/**
 * Return emoji for volume (mute, small, loud)
 */
export function volumeEmoji(volume: number) {
  if (volume > 60) return EMOJI_VOLUME_LOUD; // If volume is greater than 60, return loud volume emoji
  if (volume > 0) return EMOJI_VOLUME_SMALL; // If volume is greater than 0, return small volume emoji
  return EMOJI_VOLUME_MUTE; // Otherwise, return mute volume emoji
}

// This function takes in two parameters, a basePath and a dirName, both of type string.
export function generateGlobPattern(basePath: string, dirName: string): string {
  // The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
  // Here, we are joining the basePath, dirName and "**/*.js" to create a glob pattern that matches all .js files in the specified directory and its subdirectories.
  // The resulting path is then split using the backslash separator and joined back using the forward slash separator to ensure cross-platform compatibility.
  return path.join(basePath, dirName, "**/*.js").split("\\").join("/");
}

/**
 * Return formatted track string like ([TITLE] [HH:MM:SS])
 */
export function formatTrack(
  track: Track,
  streamString = "Live Stream",
  options?: FormatTrackOptions
): string {
  const {
    title,
    length,
    isStream,
  }: {
    title?: string;
    length?: number;
    isStream?: boolean;
  } = track.info;
  const { showLength, withMarkdownURL } = options ?? {
    showLength: true,
    withMarkdownUri: false,
  }; // Default value;
  return (
    (withMarkdownURL ? "[" : "") + // If withMarkdownURL is true, add opening square bracket
    `${title ?? "No title"} ${
      // If title is not null or undefined, add title, otherwise add "No title"
      showLength
        ? `[${
            length
              ? isStream
                ? streamString
                : humanizeSeconds(length, true) // If length is not null or undefined and isStream is false, convert length to human readable format
              : "N/A" // Otherwise, add "N/A"
          }]`
        : ""
    }` +
    (withMarkdownURL ? "]" : "") + // If withMarkdownURL is true, add closing square bracket
    (withMarkdownURL ? `(${track.info.uri})` : "") // If withMarkdownURL is true, add track URI in parentheses
  );
}

export function emojiProgressBar(percent: number) {
  let str = "";
  const p = Math.floor(percent * PROGRESS_BAR_EMOJI_COUNT); // Calculate current progress (0 ~ PROGRESS_BAR_EMOJI_COUNT)

  if (p === 0) {
    str += PROGRESS_BAR_START_BLACK; // If progress is 0, add black start progress bar emoji
  } else if (p === 1) {
    str += PROGRESS_BAR_START_SINGLE_WHITE; // If progress is 1, add single white start progress bar emoji
  } else {
    str += PROGRESS_BAR_START_WHITE; // Otherwise, add white start progress bar emoji
  }

  for (let i = 1; i < PROGRESS_BAR_EMOJI_COUNT - 1; i++) {
    if (p > i) {
      if (p - 1 === i) {
        str += PROGRESS_BAR_END_MIDDLE_WHITE; // If progress is greater than i and p - 1 is equal to i, add middle white end progress bar emoji
      } else {
        str += PROGRESS_BAR_WHITE; // Otherwise, add white progress bar emoji
      }
    } else {
      str += PROGRESS_BAR_BLACK; // If progress is less than or equal to i, add black progress bar emoji
    }
  }

  if (p >= PROGRESS_BAR_EMOJI_COUNT - 1) {
    str += PROGRESS_BAR_END_WHITE; // If progress is greater than or equal to PROGRESS_BAR_EMOJI_COUNT - 1, add white end progress bar emoji
  } else {
    str += PROGRESS_BAR_END_BLACK; // Otherwise, add black end progress bar emoji
  }

  return str; // Return the progress bar emoji string
}
