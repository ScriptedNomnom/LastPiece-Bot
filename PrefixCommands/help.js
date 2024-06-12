const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.EmbedBuilder()
  .setTitle(`Total Commands: 8`, "Prefix !")
  .setDescription("Prefix: !")
  message.channel.send({embeds: [embed]})
}

exports.name = "help"