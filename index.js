//XNIPER API
const token = "MTEwNTgzNTEzNjk4NzE3MjkzNA.GaFfQV.OIdOd_jyxe3d34A6jrxgBKoGTliX4v1xFDcRWY";
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("XniperBot Is Running!");
})

app.get("/", (req, res) => {
  res.send("API Started.");
})

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ['Guilds','GuildMessages','MessageContent'] })

const fs = require("fs");
const prefix = "!";
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./PrefixCommands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./PrefixCommands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on('messageCreate', message => {
  if(message.content.startsWith(prefix)) {
    const args = 
    message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, message, args)         
  }
  if(message.content === "ping"){
    message.channel.send("pong")
  }
  if(message.content === "idk"){
    message.channel.send("by a honey comb!! LOL")
  }
  if(message.content === "pong"){
    message.channel.send("wat da hail man i was supposed to say that")
  }
  if(message.content === "bad bot"){
    message.channel.send("lol your bad")
  }
  if(message.content === "tell me a joke"){
    message.channel.send("how do you clean a bee's hair?")
  }
  if(message.content === "with a honeycomb"){
    message.channel.send("how do you know that omgg")
  }
})

client.on("ready", async () => {
  client.user.setPresence({ activities: [{ name: "Xniper V1.5" }] })
})

client.login(token);