// Critical thinking owo
const ngrok = require("ngrok");
const { token, webhookId, webhookToken } = require("./config");

// Get discord.js and connect the Discord webhook
const Discord = require("discord.js");
const webhook = new Discord.WebhookClient(webhookId, webhookToken);

// Create the thing and send it!
(async () => {
  // Connect to ngrok
  await ngrok.authtoken(token);
  const url = await ngrok.connect({ proto: "tcp", addr: 22});

  // Create the embed to send to the webhook
  const embed = new Discord.MessageEmbed()
    .setTitle("Server Created!")
    .setDescription(url)
    .setFooter("A server has been created for your Pi")
    .setTimestamp()
    .setColor("GREEN");

    // Send embed to webhook as well as the link for easy mobile copying
    webhook.send(url, {embeds: [embed]});
    console.log(`Server Created; ${url}`);
})();
