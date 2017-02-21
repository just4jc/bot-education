### Exercise

1.  Setup the project according to the instructions [here](bot-hello/README.md) and note there is a package.json.
2.  Run bot in Emulator locally to ensure it works.
3.  Include a game where the bot picks a number from 1 to 10 and the user has a three tries to guess it correctly.  Use intent dialogs (see docs for help [here](https://docs.botframework.com/en-us/node/builder/chat/IntentDialog/#matching-regular-expressions)) and matching, as well as, [waterfalls](https://docs.botframework.com/en-us/node/builder/chat/dialogs/#waterfall) and [begin and end dialog logic](https://docs.botframework.com/en-us/node/builder/chat/dialogs/#overview).

HINT:

Function to get a randome integer:

```javascript
// from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) { // inclusive of min and max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### Check your work

[here](/Instructor-Resources/BOTs/Node/bot-simpleintent-instructor)
