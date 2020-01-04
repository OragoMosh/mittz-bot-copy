// If you didn't want to run in 24/7 you can remove it.
const http = require('http');
const express = require('express');
const app = express();
let prefix = "!v! "; // Please change YOURPREFIX to your prefix. (Example: . ! - ; >)
let sprefix = "!v!";
let botver = "1.02"
/*global Set, Map*/
app.use(express.static('public'));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200); // Here, you can send a response to the website. Example i choosed 200, that means the server was fine, working normally.
  // So, if change to 500, response will send a status with 500, that means i'm currently dead, you need to repair my coding/server.
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://mittz-bot.glitch.me/`);
}, 280000);
// If you didn't want to run in 24/7 you can remove it.
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
     console.log('Your very own message printed to the console, if the client (bot) was ready.')
});
 

// Message edit event
client.on("messageUpdate", async(oldMessage, newMessage) => {
  // First let's also check that the content has actually changed
  if(oldMessage.content === newMessage.content){
    return;
  }
  // Get the log channel
  var logchannel = client.channels.get("#📣-news"); // Replace CHANNEL_ID with your channel id.
  // Log embed
  let logembed = new Discord.RichEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("RED")
  .setDescription("Message Edited")
  .addField("Before", oldMessage.content, true)
  .addField("After", newMessage.content, true)
  .setTimestamp()
  // Send the embed
  logchannel.send(logembed)
})

// Message deletion event
client.on("messageDelete", async message => {
  // Get the log channel again
  var logchannel = client.channels.get("CHANNEL_ID"); // Replace CHANNEL_ID with your channel id.
  // Log embed
  let logembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setColor("RED")
  .setDescription(":wastebasket: Message Deleted")
  .addField("Message", message.content, true)
  .setTimestamp()
  // Let's send the embed
  logchannel.send(logembed)   })
client.on("channelCreate", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'YOURCHANNEL_NAME'); // Replace YOURCHANNEL_NAME with your channel name.
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("Channel Created")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
		.setTimestamp(new Date());
	logs.send(cembed)   });

client.on("channelDelete", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'YOURCHANNEL_NAME'); // Replace YOURCHANNEL_NAME with your channel name.
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.RichEmbed()
		.setTitle("Channel Deleted")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
		.setTimestamp(new Date())
	logs.send(cembed)
});
client.on("message", (message) => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(sprefix + "say")) {
    if (message.author.id === "193127888646701056") {
    message.delete();
   message.channel.send(" " + args.join(" "))   }   }
    
    if (message.content.startsWith(prefix + "avatar")) {
    if (args.join(" ") == "") {
        message.reply("please mention a user to give them avatar pfp.");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("GREEN") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image)
             .setFooter(`Example bot made by SplitXPlayZ 2019`)
            .setTimestamp()
        message.channel.send(embed);
 }
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "setstatus")) {
            var gamestr = args.join(" ").replace("playing ", "");
            if (message.author.id === "193127888646801056") {//440475713523417088
                client.user.setPresence({ game: { name: gamestr, type: 0 } });
                message.channel.send("**The game was set to **" + gamestr); // do not modify gamestr, or your 
            }
            else {
                message.reply("Access denied."); // if sometry to abuse your own bot, this what he/she gets.
            }   }   }
  
  if (message.content.startsWith(prefix + "ping")) {
            message.channel.send("Pong!").then(msg => {
            msg.edit(`Pong! ${msg.createdTimestamp - message.createdTimestamp}ms round-trip, ${Math.round(client.ping)}ms API heartbeat!`);   });   }   });
// one liner
client.on('message', message => {if (message.content.startsWith("Mittz" )) {
  message.channel.send("My prefix is !v! ").then(msg => {   
    });   
  }   
});

client.on('message', message => {if (message.content.startsWith("oof")) {
  message.channel.send("no u").then(msg => {   
    });   
  }   
});

client.on('message', message => {if (message.content.startsWith(prefix + "info")) {
  message.channel.send(prefix + "i t t z Bot V" + botver).then(msg => {   
    message.channel.send("[" + prefix + "]" + " This Bot was a project created by Orago").then(msg => {   
    }); 
    });   
  }   
});

client.on('message', message => {if (message.content.startsWith(prefix + "help")) {
  message.channel.send("please use " + prefix + "commands").then(msg => {    
    }); 
  }   
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) {
    if (message.author.id === "193127888646701056") {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
  }
});



client.on("ready", async () => {

  client.user.setActivity(`Just say Mittz !`, {
    type: "Playing"
  });
  
});

client.login(process.env.TOKEN);
