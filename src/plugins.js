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
      name: '$comment',
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
    // belongs to my project Dodo Bot v1 custom func
bot.functionManager.createFunction({
    name : '$os',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      const os = require(`os`)
      data.result = os.platform();
      
    return {
        code: d.util.setCode(data)
    }}
   });
    

    // belongs to aoi.js custom functions example from docs
    bot.functionManager.createFunction({
      name: "$removeObjectProperty",
      type: "djs",
      code: async d => {
        const data = d.util.aoiFunc(d);
        if (data.err) return d.error(data.err);
        const [propertyNamesStr, objectStr] = data.inside.splits;
        if (!objectStr) return d.aoiError.fnError(d, 'custom', {}, 'Missing object');
        if (!propertyNamesStr) return d.aoiError.fnError(d, 'custom', {}, 'Missing object property names');
        const propertyNames = propertyNamesStr.split(",");
        const object = JSON.parse(objectStr);
        propertyNames.forEach(propertyName => {
          delete object[propertyName];
        });
        data.result = JSON.stringify(object);
        return {
          code: d.util.setCode(data)
        };
      }
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
