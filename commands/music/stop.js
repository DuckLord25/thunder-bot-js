module.exports = {
  name: "stop",
  category: "music",
  description: "Stop all songs in the queue!",
  guildOnly: true,
  cooldown: 3,
  run(client, message, args) {
    const serverQueue = client.queue.get(message.guild.id);
    if (!message.member.voiceChannel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
