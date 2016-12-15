## Build a bot

Create a folder for your bot (recommended in Git bash), cd into it, and run npm init.

    npm init
    
Get the BotBuilder (use latest rc if still beta, otherwise just `3.5.0`) and Restify modules using npm.

    npm install --save botbuilder@3.5.0-rc9
    npm install --save restify

Create code in VSCode (or chosen editor) based on server.js here

Back in Git bash:

    node server.js

In the botemulator desktop app:
* Select app on port
* Keep app id and app password blank
* Hit connect
* Type a message to the bot and wait for a response
