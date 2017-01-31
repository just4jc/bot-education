# Lab:  Setup Locally and Emulate

> On Windows, Mac and Unix, the instructions are pretty much the same

## Prerequisites

Fufill those listed on the wiki on this repo in the Syllabus, [here](https://github.com/Azure/bot-education/wiki/Syllabus-for-2-Day-Workshop#prerequisites).

## Setup

### Setup Environment

1.  Ensure you have the emulator installed (found in the prereqs link above).
3.  Git clone this repository into a suitable folder on your machine.

`git clone https://github.com/Azure/bot-education.git`

### Visual Studio Code

2.  The code we will use in in the folder:  bot-education -> Student-Resources -> BOTs -> Node -> bot-hello.  Copy the code folder to another location for "local dev".

## Instructions

3.  Open the "local dev" folder in VSCode.
1.  In terminal install packages with:
  - `$npm install`
3.  Start the process in the command terminal (or use VSCode's integrated terminal with (type into the commmand prompt):
  - `$ node server.js`
5.  Start the emulator (make sure this is in your PATH or go to its folder) with:
  - Open the emulator (search for "botframework-emulator").
*  Click on "Enter your endpoint URL", click on the URL, keep App ID and App Password empty, hit "Connect"
* Test with a few phrases.  Try "hi" and "echo".

