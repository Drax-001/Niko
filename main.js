const Discord = require("discord.js");
require("dotenv").config();

// TOKEN
const TOKEN = "";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

// when the bot is onlin
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// when someone sends a msg
client.on("messageCreate", (msg) => {
  if (msg.content == "Hey") {
    msg.reply("Heya!");
  }
});

// to make bot online
client.login(process.env.TOKEN);
