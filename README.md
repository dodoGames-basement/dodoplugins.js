# dodoplugins.js
an package dedicated to aoi.js v6 which loads few custom supposedly "special" functions.
# Disclaimer
this package (`dodoplugins.js`) is not made by official aoi.js developers, and so therefore, do not request support for the package's function in their official support server. instead request the support for it by either joining our [support server](https://discord.gg/pFwKjAaZvj) or from [Github Issues](https://github.com/dodoGames-s-Studios/dodoplugins.js/issues/new/choose).
# what is this
an package for aoi.js v6 as a plugin that loads some of the custom functions it has, for example `$sendColoredLog`

# setup
```js
npm i dodoplugins.js
```
this will install the npm version of the package.

additionally you can install the dev version of the package using the Github URL.
```js
npm i https://github.com/dodoGames-s-Studios/dodoplugins.js
```

you then load the package with the following
```js
// define clients
const { Plugins } = require("dodoplugins.js")
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
# Links
This is Optional, So Check Links at Your own Discretion.
* [Docs](https://dodogames.gitbook.io/dodogames-aoiplugins-docs/)
* [Support Server](https://discord.gg/pFwKjAaZvj)

# credits
the source code on how this was setup belongs to `Kawaii#7615`, thank him/her later for the aoi.js plugins tutorial later.
* `Kawaii#7615`: for the aoi.js plugins tutorial later.
* [`Blur`](https://github.com/Bumblebee-3): for helping me on getting this package to work.

