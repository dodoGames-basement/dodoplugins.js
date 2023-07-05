# dodoplugins.js
An package dedicated to aoi.js v6 which loads functions to simplify bot development
# Disclaimer
This package (`dodoplugins.js`) is not made by official aoi.js developers, and so therefore, do not request support for the package's function in their official support server, instead request the support for it by either joining our [support server](https://discord.gg/pFwKjAaZvj) or from [Github Issues](https://github.com/dodoGames-s-Studios/dodoplugins.js/issues/new/choose).
# What is this
An package for aoi.js v6 as a plugin that loads some of the custom functions it has, for example `$sendColoredLog`!
# Why does this exist?
Back in the old days of custom functions in 2022, it was simple and such. However, considering that breaking changes were pushed to aoi in the past for custom functions, people got annoyed and generally being confused on what's being changed which honestly used to apply to custom functions with djs mode. 

One day i decided that instead of being having to suffer to fix broken custom functions in the future over an breaking change (for multiple bots of mine at least), i said to myself, why not just add them into an package for easier process? And that's how `dodoplugins.js` was created as an simple project that loads custom functions it includes to aoi.

# Setup
```js
npm i dodoplugins.js@latest
```
This will install the npm version of the package.

You can also use other version of the package such as:
```js
// Beta version
npm i dodoplugins.js@beta
// Alpha version
npm i dodoplugins.js@alpha
```

You then load the package with the following
```js
// Define clients
const { Plugins } = require("dodoplugins.js")
const { AoiClient } = require("aoi.js");
// Setup aoi.js first
const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
 database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

// Loading the package
const plugins = new Plugins({ bot:bot }); 
plugins.loadPlugins(); 
```
This will enable all custom functions that were created in the package.
# Links
This is Optional, So Check Links at Your own Discretion.
* [Docs](https://dodogames.gitbook.io/dodoplugins.js)
* [Support Server](https://discord.gg/pFwKjAaZvj)
* [NPM page](https://www.npmjs.com/package/dodoplugins.js)

# Credits
the source code on how this was setup belongs to `Kawaii#7615`, thank him/her later for the aoi.js plugins tutorial later.
* `Kawaii#7615`: for the aoi.js plugins tutorial later
* [`Blur`](https://github.com/Bumblebee-3): for helping me on getting this package to work
* [`InikoMatthewPro`](https://github.com/InikoMatthewPro): for publishing the package on npm

