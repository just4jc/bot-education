/*-----------------------------------------------------------------------------
This Bot is part of a lab on how to create a simple hello world, dialog stack/promts and 
old vs. new style (v3.5) bot.  Sections will be uncommented and modified.

# RUN THE BOT:
    Run the bot from the command line using "node server.js" and then type 
    anything to wake the bot up.
    
-----------------------------------------------------------------------------*/

// Required packages
var builder = require('botbuilder');
var restify = require('restify');

/***************************** SETUP  ************************* */

// Connector options
var botConnectorOptions = {
    appId: process.env.MICROSOFT_APP_ID || "",
    appPassword: process.env.MICROSOFT_APP_PASSWORD || ""
};

// Instatiate the chat connector to route messages
var connector = new builder.ChatConnector(botConnectorOptions);

// Handle Bot Framework messages with a restify server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.port || process.env.PORT || 3978, function () { 
    console.log('%s listening to %s', server.name, server.url); 
});

//********************* EXAMPLES ************************* */
// Uncomment out each individually to run

/************* Example 1 **************/

// Create a bot
var bot = new builder.UniversalBot(connector);

// Dialog handling
bot.dialog('/', function (session) {
    session.send('Hello world');
});

// get to name with session.userData.name -> will this work locally?

/************* Example 2 **************/

// // What's different about this bot setup? (this is the new style, btw, for v3.5.0)

// var bot = new builder.UniversalBot(connector, [
//     function (session) {
//         // Introducing a builtin prompt
//         builder.Prompts.text(session, 'Hi! What is your name?');
//     },
//     function (session, results) {
//         // Step 2 in the waterfall
//         session.send('Hello %s!', results.response);
//     }
// ]);

// What is the portion between the square brackets called?


/************* Example 3 **************/


// // Back to old style of non-root message handling
// var bot = new builder.UniversalBot(connector);

// // Think of a sandwich (the bread is the root dialog and meat/cheese the 'askName' dialog)
// bot.dialog('/', [
//     function (session) {
//         // "push" onto the dialog stack
//         session.beginDialog('/askName');
//     },
//     function (session, results) {
//         session.send('Hello %s!', results.response);
//     }
// ]);

// bot.dialog('/askName', [ // this is a small waterfall
//     function (session) {
//         builder.Prompts.text(session, 'Hi! What is your name?');
//     },
//     function (session, results) {
//         // "pop" off of the dialog stack and return the results
//         session.endDialogWithResult(results);
//     }
// ]);

// // Can you make this into the new style?

/************* Advanced Example **************/

// Test this bot locally: https://github.com/Microsoft/BotBuilder/blob/master/Node/examples/basics-menus/app.js

/************************* OPTIONAL PARTS *************************/

// Serve a static web page - for testing deployment
server.get(/.*/, restify.serveStatic({
	'directory': '.',
	'default': 'index.html'
}));



// More samples here:  https://github.com/Microsoft/BotBuilder-Samples
// And of course here:  https://github.com/Microsoft/BotBuilder/tree/master/Node/examples
