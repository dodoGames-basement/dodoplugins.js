class Comment {
    constructor(args) {
    this.args = args;
    if (!args.bot) {
    console.log("You have not inputted your aoi client! Exiting Code!");
    process.exit(0);
    }
    } loadComment() {
    const bot = this.args.bot;
    
    // Kawaii#7615 plugin example
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

    module.exports = {
    Comment
    }
}
}