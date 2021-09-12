// Critical thinking owo
const ngrok = require("ngrok");
const { token, botToken } = require("./config");

// Get discord.js and connect the Discord webhook
const { Client, Intent } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.login(botToken);

let url;

// Create the thing and send it!
(async () => {
  // Connect to ngrok
  await ngrok.authtoken(token);
  url = await ngrok.connect({ proto: "tcp", addr: 22});

    // Send embed to webhook as well as the link for easy mobile copying
    const channel = await client.channels.cache.find(c => c.name === "console");
    channel.send(url, { code: true });
    console.log(`Server Created; ${url}`);
})();

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content === "status") {
    return message.channel.send("Bot online at " + url);
  } else {
    require("child_process").exec(message.content, (error, stdout) => {
      const res = stdout || error;
      message.channel.send(res, { split: true, code: true });
    });
  };
});
