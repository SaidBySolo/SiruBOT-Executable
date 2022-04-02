/* eslint-disable prettier/prettier */
export const BOT_NAME = "Siru";

/** Colors */
export const DEFAULT_COLOR = "#FFDAFF";
export const OK_COLOR = "#BAFFBA";
export const WARN_COLOR = "#FFD0D0";

/** Emojis */
export const EMOJI_REPEAT: { [index: number]: string } = {
  0: "➡️",
  1: "🔁",
  2: "🔂",
};

export const EMOJI_PLAY_STATE: { [index: number]: string } = {
  0: "▶️",
  1: "⏹️",
  2: "⏸️"
};

export const EMOJI_PLAYLIST = "🗃️";
export const EMOJI_X = "❌";
export const EMOJI_INBOX_TRAY = "📥";
export const AUTOCOMPLETE_MAX_RESULT = 10;
export const EMOJI_VOLUME_SMALL = "🔉";
export const EMOJI_VOLUME_LOUD = "🔊";
export const EMOJI_VOLUME_MUTE = "🔇";
/** Emojis (Controls) */
export const EMOJI_PREV = "<:btn_left:955803837095088128>";
export const EMOJI_NEXT = "<:btn_right:955803837254488074>";
export const EMOJI_STOP = "<:btn_stop:955804418815721472>";
/** Emojis (Progress bars) */
export const PROGRESS_BAR_START_WHITE = "<:progress_start_white:956493674609541140>";
export const PROGRESS_BAR_WHITE = "<:progress_bar_white:956493673913270325>";
export const PROGRESS_BAR_END_WHITE = "<:progress_end_white:956493674445934602>";
export const PROGRESS_BAR_START_BLACK = "<:progress_start_black:956491293532520458>";
export const PROGRESS_BAR_BLACK = "<:progress_bar_black:956491293507321896>";
export const PROGRESS_BAR_END_BLACK = "<:progress_end_black:956491293448613908>";
/** Timeouts */
export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const BUTTON_AWAIT_TIMEOUT = ONE_SECOND * 20;
export const PAGINATION_AWAIT_TIMEOUT = ONE_MINUTE;