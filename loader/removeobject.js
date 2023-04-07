class removeObjectProperty {
    constructor(args) {
    this.args = args;
    if (!args.bot) {
    console.log("You have not inputted your aoi client! Exiting Code!");
    process.exit(0);
    }
    } loadObjectRemove() {
    const bot = this.args.bot;

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

    module.exports = {
      removeObjectProperty
    }
}
}