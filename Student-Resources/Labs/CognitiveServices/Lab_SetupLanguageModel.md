# Lab:  Setup LUIS Model

 This LUIS model is meant to capture the intents of a user who is finding out information about a conference (e.g. "what time is Sally Mason speaking?" or "When is the Data Science with Python talk?").

This model is intended to be consumed by a Bot built with the Microsoft Bot Framework, but can be leveraged in other apps. 

## Instructions

1.  Login into https://www.luis.ai (you may have to create an account)
2.  Click on "+New App" and "New Application"
3.  Fill out the form (Application usage scenario is "Bot")
4. Enter the following Entities
  * room
  * talk_title
  * speaker
* Add the following Intents and when you do "Add Action", check "Fufillment" and Action Type of "JsonRequest".
  * wherespeaker
  * whenspeaker

  You May add these as well if you wish...
  
  * wheretitle
  * whentitle
  * nextspeakers
  * nexttalks

  Your model will look something like:
  
  <img src="images/luis_model_parts.png" width = 200>
* Enter 5 example utterences for each intent attempting to reflect all of the entities as well (you will need to label the entities by highlighting parts of the utterence AND selecting a label before submitting it).

  Labeling looks like:
  
  <img src="images/luis_utterence.png" width = 500>
7.  Click on "Train" in the lower lefthand corner
8.  Click on "App Settings" in the upper lefthand corner and make a note of
  * App Id
  * Endpoint key (you probably need to create one so go ahead)
*  Click on "Publish" in the upper lefthand corner and publish the web service.  

Note:  For registered bots you may need a Bot Framework specific endpoint. See https://www.luis.ai/Help#PublishingModel for more help and Bot Framework specific information.


Congratulations!  Enjoy your new language model!

### Additional Info

* Good docs are found through the link "Help Docs" in the navi bar.  
* A great LUIS bot sample with a useful guide can be found at https://github.com/Microsoft/BotBuilder-Samples/tree/master/Node/intelligence-LUIS.