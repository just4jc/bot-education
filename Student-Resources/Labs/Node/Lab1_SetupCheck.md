# Lab:  Setup Locally and Emulate

> On Windows, Mac and Unix, the instructions are pretty much the same

## Prerequisites

Fufill those listed on the wiki on this repo in the Syllabus, [here](https://github.com/Azure/bot-education/wiki/Syllabus-for-2-Day-Workshop#prerequisites).

## Setup

### Setup Environment

1.  Ensure you have the emulator installed (found in the prereqs link above).  See, also, [this](https://github.com/microsoft/botframework-emulator/wiki/Getting-Started#get-up-and-running) to get up and running with emulator.
3.  Git clone, using your Git Bash, the following repository into a suitable folder on your machine.  You'll type on the command line:

  `git clone https://github.com/Azure/bot-education.git`

### Visual Studio Code or Code Editor/IDE

2.  The code we will use in in the folder:  bot-education -> Student-Resources -> BOTs -> Node -> bot-hello.  Copy the code folder to another location for "local dev".

## Instructions

3.  Open the "local dev" folder in VSCode.
1.  In terminal install packages with (will pull in from the package.json file):
  - `npm install`
3.  Start the process in the command terminal (or use VSCode's integrated terminal) by typing into the commmand prompt:
  - `node server.js`
  
  > Doesn't work? Windows not able to find the node command?  Try adding `NODE_PATH` as a System variable in the Advanced tab of the System Properties dialog and set to the path `%AppData%\npm\node_modules` (Windows 7/8/10) or wherever npm was installed.
  
5.  Start the emulator (make sure this is in your PATH or go to its folder or search for "botframework-emulator").
*  Click on "Enter your endpoint URL", click on the URL, or enter
    `http://localhost:3978/api/message` into the endpoint field
  and keep App ID and App Password empty, hit "Connect" (more info [here](https://github.com/microsoft/botframework-emulator/wiki/Getting-Started#connect-to-a-bot-running-on-localhost)).
* Test with a few phrases.  Try "hi" and "echo".
* Take a look at `server.js` file and see if you can modify the messages and follow any exercises.

