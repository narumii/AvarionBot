const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    var url = "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4&timeout=10000&country=all"
    const file = fs.createWriteStream("proxyfile.txt")
    fs.writeFileSync('proxyfile.txt', ' ');
    const request = https.get(url, function(response) {
        response.pipe(file)
        console.log(`[${moment.utc(Date.now())}] [*] Sucsessfuly scraped proxies from database.`)
    });
    const embed = new Discord.MessageEmbed()
    .setTitle("Successful update")
    .setDescription(`Proxy installed in the file **${file.path}**`)
    message.channel.send(embed)
}


module.exports.help = {
    name: "update1",
    aliases: ["upd"]
}