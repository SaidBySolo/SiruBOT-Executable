import { Guild } from "discord.js";
import { BaseEvent, Client } from "../structures";
export default class GuildDeleteEvent extends BaseEvent {
  constructor(client: Client) {
    super(client, "guildDelete");
  }

  async run(guild: Guild): Promise<void> {
    this.client.log.debug(`Guild deleted. Clear audio @ ${guild.id}`);
    if (this.client.audio.hasPlayerDispatcher(guild.id)) {
      this.client.audio.getPlayerDispatcher(guild.id).destroy();
    }
  }
}
