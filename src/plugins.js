const chalk = require('chalk');
class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.bot) {
      console.log("You have not inputted your aoi client! Exiting Code!");
      process.exit(0);
    }
  } loadPlugins() {
    const bot = this.args.bot;

    // Kawaii#7615 plugin example
    bot.functionManager.createFunction({
      name: '$ignore',
      type: 'djs',
      code: async d => {
        const data = d.util.aoiFunc(d);
        const [text] = data.inside.splits;
        if (!text) return d.aoiError.fnError(d, 'custom', {}, 'No Text was Provided');
        //nothing here, it's comment
        return {
          code: d.util.setCode(data)
        }
      }
    });


     bot.functionManager.createFunction({
    name: "$randomtopic", 
    params: [], 
    type: "aoi.js", 
    code: `$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?]` 
});

bot.functionManager.createFunction({
    name: "$nomentionreply", 
    params: [], 
    type: "aoi.js", 
    code: `$reply[$messageID;false]` 
});

    
    bot.functionManager.createFunction({
    name: "$mentionauthor", 
    params: [], 
    type: "aoi.js", 
    code: `<@$authorID>` 
});
    
    bot.functionManager.createFunction({
  name: "$isboostmessage", 
  params: ["messageid"],
  type: "aoi.js", 
  code: ` 
    $checkContains[$messageType[$get[messageidchecker]];8;9;10;11]


$let[messageidchecker;$replaceText[$replaceText[$checkCondition[$messageExists[{messageid}]==true];true;{messageid}];false;$messageID]]
  ` 
     
})
    
bot.functionManager.createFunction({
  name: "$version", 
  params: [],
  type: "aoi.js", 
  code: ` 
    1.1.0-beta.3
  ` 
})

    
bot.functionManager.createFunction({
  name: "$clientAvatar", 
  type: "djs", 
  code: async d => {
      let data = d.util.aoiFunc(d);
    const botid = d.client.user.id;
    const Bot = await d.util.getUser(d, botid);

    data.result = Bot.avatarURL({format: 'png', size: 4096, dynamic: true});
    return {
        code: d.util.setCode(data)
    }}
})
    
    // was meant to be an little easter egg but k.
    bot.functionManager.createFunction({
    name : '$dodoAvatar',
    type : 'djs',
    code : async d => {
      let data = d.util.aoiFunc(d);

    const Dodo = await d.util.getUser(d, "632607624742961153");

    data.result = Dodo.avatarURL({format: 'png', size: 4096, dynamic: true});
    return {
        code: d.util.setCode(data)
    }}
   }); 

  bot.functionManager.createFunction({
  name: "$ifv6",
  type: "djs",
  code: async d => bot.functionManager.cache.get("if").code(d)
})

    // belongs to me
    bot.functionManager.createFunction({
    name : '$arch',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      data.result = process.arch;
      
    return {
        code: d.util.setCode(data)
    }}
   });

 bot.functionManager.createFunction({
    name : '$djsVersion',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      const { version } = require("discord.js")
      data.result = version;
      
    return {
        code: d.util.setCode(data)
    }}
   });

    
bot.functionManager.createFunction({
    name : '$clientAboutMe',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      data.result = d.client.application.description;
      
    return {
        code: d.util.setCode(data)
    }}
   });


    bot.functionManager.createFunction({
    name : '$IsclientPublic',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      data.result = d.client.application.botPublic;
      
    return {
        code: d.util.setCode(data)
    }}
   });
    
    
    // belongs to my project Dodo Bot v1 custom func
bot.functionManager.createFunction({
    name : '$platform',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      const os = require(`os`)
      data.result = os.platform();
      
    return {
        code: d.util.setCode(data)
    }}
   });
    
    // $sendColoredLog[text;hex code?]
    bot.functionManager.createFunction({
      name: "$sendColoredLog",
      type: "djs",
      code: async d => {
        const data = d.util.aoiFunc(d);

        if (data.err) return d.error(data.err);

        const [msg, color = "#f70000"] = data.inside.splits;
        if (!msg) return d.aoiError.fnError(d, 'custom', {}, 'no text provided');
        console.log(chalk.hex(color)(msg.addBrackets()));

        return {
          code: d.util.setCode(data)
        }
      }
    });



  }
}
module.exports = {
  Plugins
}
