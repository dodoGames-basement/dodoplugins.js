# dodoplugins.js
an package dedicated to aoi.js v6 which loads few custom supposedly "special" functions.

# what is this
an package for aoi.js v6 as a plugin that loads some of the custom functions it has, for example `$sendColoredLog`

# setup
```js
npm i https://github.com/dodoGames-s-Studios/dodoplugins.js
```
this will install the github version of the package

you then load the package with the following
```js
// define clients
const { Plugins } = require("@dodoGames/aoiplugins")
const { AoiClient } = require("aoi.js");
// setup aoi.js first
const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});

// load it
const plugins = new Plugins({ bot:bot }); 
plugins.loadPlugins(); 
```
this will enable all custom functions that were created in the package.

# credits
the source code on how this was setup belongs to `Kawaii#7615`, thank him/her later for the aoi.js plugins tutorial later.
* `Kawaii#7615`: for the aoi.js plugins tutorial later.
* [`Blur`](https://github.com/dodoGames-s-Studios/dodoplugins.js/issues?q=is%3Apr+author%3ABumblebee-3): for helping me on getting this package to work.

