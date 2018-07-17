const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 


const botStats = {
	totalGuildsID: '468779433692758016',
	totalUsersID: '468779034302480384',
	totalChannelsID: '468779680632274963'
	
	
}
	
	client.on('guildCreate', guild => {
		
	client.channels.get(botStats.totalGuildsID).setName('Total Guilds : ${client.guilds.size}');
	client.channels.get(botStats.totalUsersID).setName('Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}');
	client.channels.get(botStats.totalChannelsID).setName('Total Channels : ${client.channels.size}');
		
		
		
});
		
		
	client.on('guildDelete', guild => {
	
	
	client.channels.get(botStats.totalGuildsID).setName('Total Guilds : ${client.guilds.size}');
	client.channels.get(botStats.totalUsersID).setName('Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}');
	client.channels.get(botStats.totalChannelsID).setName('Total Channels : ${client.channels.size}');
		
			
		
	
	
	
	
	
	});


client.login(process.env.BOT_TOKEN);
