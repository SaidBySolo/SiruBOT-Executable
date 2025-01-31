import type { NodeOption } from "shoukaku";

// Define the interface for KafuuSettings
export interface KafuuSettings {
  sentryDsn?: string; // Optional Sentry DSN string
  bot: {
    shardsPerClusters: number; // Number of shards per cluster
    activity: {
      url?: string; // Optional URL string
      type: "STREAMING" | "LISTENING" | "WATCHING" | "PLAYING"; // Activity type
    };
    token: string; // Bot token string
    playing: string; // Playing status string
    owners: string[]; // Array of bot owners' IDs
  };
  webhook?: {
    id: string; // Webhook ID string
    token: string; // Webhook token string
  };
  audio: {
    searchResults: number; // Number of search results
    timeout: number; // Timeout in milliseconds
    nodes: NodeOption[]; // Array of NodeOption objects
    relatedRoutePlanner?: {
      // Optional related route planner object
      ipBlocks: string[]; // Array of IP blocks
      excludeIps: string[]; // Array of excluded IPs
      retryCount: number; // Number of retries
    };
  };
  database: {
    sqlite: {
      path: string; // SQLite path string
    };
    mongodb: {
      url: string; // MongoDB URL string
      username: string; // MongoDB username string
      password: string; // MongoDB password string
    };
  };
}
