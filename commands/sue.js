const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

       
 exports.run = (client, message, args) => {
     let sue = args[0]; 
     let amount = args[2];
     
     var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;

              if (sue === '-') {  
            let victim = message.guild.member(message.mentions.users.first());
                   let reason = args.slice(3).join(' ');
                       var full =  `- Prosecutor: ${message.author} \n- Defendant: ${victim} \n- Reason: ${reason} \n- Amount: $${amount}` 
                    let x = new Discord.RichEmbed()
                         .setColor("#DEB887")    
                         .addField(`Court Date: ` + today, full)
                        .setFooter(`Case ID: ${message.id}`);
     message.guild.channels.find("name", "court").send(x);
 }
 }
                               
  
             
     
     
     
module.exports.help = {
    name: "sue"
}
