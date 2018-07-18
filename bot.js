const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 


const serverStats = {
        guildID: '468461294262157342',
	totalUsersID:'469073030858014731',
	memberCountID:'469072607610929162',
	botCountID:'469073139578437632'
};


client.on('guildMemberAdd', member => {

if (member.guild.id !== serverStats.guildID) return;
client.channels.get(serverStats.totalUsersID).setName('Total Users : ${member.guild.memberCount}');
client.channels.get(serverStats.memberCountID).setName('Member Count : ${member.guild.members.filter(m => !m.user.bot).size}');	
client.channels.get(serverStats.botCountID).setName('Bot Count : ${member.guild.members.filter(m => m.user.bot).size}');

});




client.on('guildMemberRemove', member => {
if (member.guild.id !== serverStats.guildID) return;
	
client.channels.get(serverStats.totalUsersID).setName('Total Users : ${member.guild.memberCount}');
client.channels.get(serverStats.memberCountID).setName('Member Count : ${member.guild.members.filter(m => !m.user.bot).size}');	
client.channels.get(serverStats.botCountID).setName('Bot Count : ${member.guild.members.filter(m => m.user.bot).size}');




});





















client.login(process.env.BOT_TOKEN);
