## Build a bot if you have a package.json

Create a folder for your bot, cd into it, copy all code over and run npm install to install all things in package.json.  So, in terminal type:

    npm install

Create code in VSCode (or chosen editor) based on server.js in this folder.

Back in terminal:

    node server.js

In the botemulator desktop app:
* Select app on port  (usually 3978)
* Keep app id and app password blank
* Hit connect
* Type a message to the bot and wait for a response


## Build a bot if no package.json

Create a folder for your bot, cd into it, and run npm init to begin a project.  So, in terminal type:

    npm init
    
Get the BotBuilder (use latest when saving botbuilder below, otherwise just `3.5.4`) and Restify modules using npm.

    npm install --save botbuilder@3.5.4
    npm install --save restify

Create code in VSCode (or chosen editor) based on server.js in this folder.

Back in terminal:

    node server.js

In the botemulator desktop app:
* Select app on port (usually 3978)
* Keep app id and app password blank
* Hit connect
* Type a message to the bot and wait for a response
