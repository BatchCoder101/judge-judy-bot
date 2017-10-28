const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

       
 exports.run = (client, message, args) => {
     let sue = args[0]; 
     let amount = args[2];
     let close = args[0];
     let choose = args[2];
        let shutdown = args[0];
     
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
                                 const accept = client.emojis.find("name", "courtaccept");
                   const deny = client.emojis.find("name", "courtdeny");
                    let x = new Discord.RichEmbed()
                         .setColor("#DEB887")    
                         .addField(`Court Date: ` + today, full)
                        .addField('Votes', `This needs 6  ${accept} to be passed or 6  ${deny} to be denied!`)
                        .setFooter(`Case ID: ${message.id}`);

     message.guild.channels.find("name", "court").send(x) 
                  .then(function (message) {
                    message.react(deny);
                    message.react(accept);  
     });
                 
                  
 } else 
     if (close === 'close') {
          if (message.member.hasPermission("ADMINISTRATOR")) { 
         let id = args.slice(3).join(' ');
         let idsize = id.length-1;
         let victim = message.guild.member(message.mentions.users.first());
         if (!victim) {
                    let novictim = new Discord.RichEmbed()
                                      .setColor("#8b0000")    
                        .addField(`No victim`, `You didn't mention a victim!`);
             message.channel.send(novictim);
         } else
             if (!id) {
                                                               let noid = new Discord.RichEmbed()
                                      .setColor("#8b0000")    
                        .addField(`No Case ID`, `You didn't put a case ID!`); 
                         message.channel.send(noid);
             } else
         if (Math.round(idsize) < 17) {
                                              let noid2 = new Discord.RichEmbed()
                                      .setColor("#8b0000")    
                        .addField(`Low Case ID`, `The Case ID seems to be low character count!`); 
                         message.channel.send(noid2);
         } else
         if (!choose) {
                                              let nochoose = new Discord.RichEmbed()
                                      .setColor("#8b0000")    
                        .addField(`No Won or Lost`, `You didn't put if they won or lost!`); 
             message.channel.send(nochoose);
         } else 
         if (choose === 'won') {
                                        let z = new Discord.RichEmbed()
                         .setColor("#2ace2a")    
                        .addField(`Case ID: ${id} has been closed.`, `${victim} has ${choose} the case!`)  
                                           message.guild.channels.find("name", "court").send(z);
         } else
             if (choose === 'lost') {
                                                         let y = new Discord.RichEmbed()
                         .setColor("#8b0000")    
                        .addField(`Case ID: ${id} has been closed.`, `${victim} has ${choose} the case!`)  
                                            message.guild.channels.find("name", "court").send(y);
             } else {
                                                                          let unknown = new Discord.RichEmbed()
                         .setColor("#8b0000")    
                        .addField(`Unknown Option`, `Umm.. I don't think ${choose} is lost or won.`)  
                                                                          message.channel.send(unknown);
             }
     } else {
                                                                                  let noperms = new Discord.RichEmbed()
                         .setColor("#8b0000")    
                        .addField(`No Permission`, `You don't have permission!`)  
                                                                          message.channel.send(noperms); 
     }
     } else 
                if (shutdown === 'shutdown') {
                                         let update = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Shutdown`, `I've been shutdown due to an update or repair! Please stand by!`)
      
message.guild.channels.find("name", "general").send(update).then(() => {
            client.destroy().then(() => {
            })
        })
    }
 }
module.exports.help = {
    name: "sue"
}
