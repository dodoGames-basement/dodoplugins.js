class Plugins {
    constructor(args) {
    this.args = args;
    if (!args.bot) {
    console.log("You have not inputted your aoi client! Exiting Code!");
    process.exit(0);
    }
    } loadPlugins() {
    const bot = this.args.bot;
    
    bot.functionManager.createFunction({
    name: '$comment',
    type: 'djs',
    code: async d => {
    const data = d.util.aoiFunc(d);
    //nothing here, it's comment
    return {
    code: d.util.setCode(data)
    }
    }
    });
// $sendColoredLog[text;hex code?]
    bot.functionManager.createFunction({
        name: "$sendColoredLog",
        type: "djs",
        code: async d => {
              const chalk = require('chalk');
              const data = d.util.aoiFunc(d);
              
          if (data.err) return d.error(data.err);
      
          const [msg, color = "#f70000"] = data.inside.splits;
          if (!msg) return d.aoiError.fnError(d, 'custom', {}, 'no text provided');
          console.log(chalk.hex(color)(msg.addBrackets()));
      
          return {
              code: d.util.setCode(data)
          }}
          });

    module.exports = {
    Plugins
    }
}
}