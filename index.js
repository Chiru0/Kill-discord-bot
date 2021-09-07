
//npx nodemon inxe.js
//cls
//C:\Users\CIRO\Desktop\KillBot

const { Client, Intents, Message, MessageEmbed} = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const config = require("./config.json")

client.on("ready", () =>
{

    console.log(`Bot is ready as ${client.user.tag}`)

})

client.on("message", message =>
{

    if(message.content.startsWith(config.prefix))
    {

        console.log(message.content);

        if(message.content.endsWith("hola"))
        {

            message.reply("Hola!")

        }      
        if(message.content.includes("kill"))
        {
            let mention = message.mentions.users.first()
            message.reply(`you killed ${mention}`);
        }
        if(message.content.endsWith("godmode"))
        {
            
            const embedG = new MessageEmbed()
            .setTitle("**G O D M O D E**")
            .setColor("#FFFFFF")
            .setImage("https://c.tenor.com/6cu5bNft-XMAAAAC/killua-anime.gif")
            .setThumbnail("https://64.media.tumblr.com/2c28843b089cc7d0b9bc275b088b1703/6caa6e4da317fc20-2c/s1280x1920/e873c600aba867fad65d248e5cb27b6e6ddf7428.jpg")
            .setAuthor("Kill", "https://64.media.tumblr.com/2c28843b089cc7d0b9bc275b088b1703/6caa6e4da317fc20-2c/s1280x1920/e873c600aba867fad65d248e5cb27b6e6ddf7428.jpg")
            .addField(":sunglasses:","You just entered **G O D M O D E**");
            message.channel.send({embeds : [embedG]});

        }      
        }
        if(message.content.endsWith("redes"))
        {
            
            const embed = new MessageEmbed()
            .setTitle("Redes!")
            .setColor("#000000")
            .setImage("https://64.media.tumblr.com/2c28843b089cc7d0b9bc275b088b1703/6caa6e4da317fc20-2c/s1280x1920/e873c600aba867fad65d248e5cb27b6e6ddf7428.jpg")
            .setAuthor("Kill", "https://64.media.tumblr.com/2c28843b089cc7d0b9bc275b088b1703/6caa6e4da317fc20-2c/s1280x1920/e873c600aba867fad65d248e5cb27b6e6ddf7428.jpg")
            .addField("**YT**", "https://www.youtube.com/channel/UC8gz0xy3B8_Kxw5uwyl3_vA");
            message.channel.send({embeds : [embed]});
                
        }

        if(message.content.endsWith("random"))
        {
            
            rndmessage(message);

            function rndmessage(message)
            {
                var messages = ["1","2","3","4","5","6","7","8","9","10"]
                var rnd = Math.floor(Math.random() * messages.length);
                message.channel.send(messages[rnd]);
            }

        }

    }

)

client.login(config.token);