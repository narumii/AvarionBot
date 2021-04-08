const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = function(client, message) {

  var gifler = ["https://media.discordapp.net/attachments/735246740520697996/736194830467727360/53.gif?width=400&height=222", "https://images-ext-2.discordapp.net/external/Qn7QAexTkV01wqaswdakh2heT9EzIfwgbBgo4Zyqikk/https/media.discordapp.net/attachments/707630474096279593/707663477333819512/a1giphy_2.gif?width=400&height=200", "https://images-ext-1.discordapp.net/external/rXughKWJttAV25VnAsLFIS2CLwGJeyLJye2hAyTgPvw/https/pa1.narvii.com/6889/8fe9b59a19b79a62d1bd908de345c44bd29aca08r1-500-245_hq.gif?width=400&height=196", "https://cdn.discordapp.com/attachments/694694884459937862/743668306346770503/18.gif", "https://cdn.discordapp.com/attachments/694694884459937862/743668380233498677/16.gif", "https://cdn.discordapp.com/attachments/721047488026378250/740330800070918245/tumblr_numkbtdZgU1ubzetko1_540.gif", "https://cdn.discordapp.com/attachments/697503979680301077/713156756456603668/9zZKwOtDCN3N4qR2CN.gif", "https://cdn.discordapp.com/attachments/697503979680301077/698996487534674031/209056.gif", "https://cdn.discordapp.com/attachments/697503979680301077/699147532688818176/b28433c392959f923ff0d736cd89dcbd.gif","https://cdn.discordapp.com/attachments/697503979680301077/713156757450522725/Ch1zCx8tu6DQY.gif", "https://cdn.discordapp.com/attachments/697503979680301077/735069335139385395/blackpanther.gif", "https://cdn.discordapp.com/attachments/704393265318985789/739144380237086791/3bbb2322-8c43-47e8-9dfe-7695171f63f1.gif", "https://cdn.discordapp.com/attachments/704393265318985789/737619719728660601/1d624ac0601b41c0cd80b7ab3c516d1b.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];

const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('❖ AvarionHub 2021')
.setTimestamp()
.setDescription("**❖ HELP** \n  \n ❖ NullPing Bypass (1.8-1.16.4) ► ;nullping ip:port \n ❖ Vensity Bypass ► ;vensity ip:port \n ❖ Botter (1.8) ► ;botter ip:port \n ❖ OverLoad ;overload ip:port \n ❖ Smasher (1.8-16.4) ;smasher ip:port \n ❖ LegacyDdos ;ddos ip:port \n ❖ Botter2 (1.8) ;botter2 ip:port \n ❖ AntiBotDeluxe (1.8) ;abd ip:port \n ❖ ConsoleSpammerOP (1.8) ;consolespammer ip:port ")
.setFooter('© Developer Matija#3553', client.user.avatarURL)
.setTimestamp()
.setThumbnail("")
message.channel.send(embed)
};



exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'],
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm attack komutları gösterir.',
  usage: 'help'
};