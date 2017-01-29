# Lab:  Setup Locally and Emulate

> On Windows, Mac and Unix, the instructions are pretty much the same

## Prerequisites

Fufill those listed on the wiki on this repo in the Syllabus, [here](https://github.com/Azure/bot-education/wiki/Syllabus-for-2-Day-Workshop#prerequisites).

## Setup

### Cognitive Services trial keys

To sign up for the Computer Vision trial, follow these instructions:

1.  Go to https://www.microsoft.com/cognitive-services/en-us/apis
*  Click on "My account" in the upper right-hand corner to log in to Cognitive Services.
*  You will see a 'Hello' welcome page with a listing of trials from which you can request new ones.  Please select "Entity Linking", "Computer Vision" and "Text Analytics".  Read and decide if you agree to Microsoft Cognitive Services Terms and Microsoft Privacy Statement.  After agreeing, click "Subscribe" to sign up for these trials.  

You will then be able to gain access to your keys.

### Setup Environment

1.  Ensure you have the emulator installed (found in the prereqs link above).
3.  Git clone this repository into a suitable folder on your machine.

`git clone https://github.com/Azure/bot-education.git`

### Visual Studio Code

2.  The code we will use in in the folder:  bot-education -> Student-Resources -> BOTs -> Node -> bot-hello.  Copy the code folder to another location for "local dev".

## Instructions

3.  Open the "local dev" folder in VSCode.
3.  Start the process in the command terminal (or use VSCode's integrated terminal with (type into the commmand prompt):
  - `$ node server.js`
5.  Start the emulator (make sure this is in your PATH or go to its folder) with:
  - Open the emulator (search for "botframework-emulator").
*  Click on "Enter your endpoint URL", click on the URL, keep App ID and App Password empty, hit "Connect"
* Test with a few phrases.  Try "hi" and "echo".

