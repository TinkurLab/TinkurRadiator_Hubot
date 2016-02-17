# TinkurRadiator - Hubot Scripts

## Overview

TinkurRadiator provides real world information (blinky lights, sounds, etc) when things happen (ex. an outage) in a chat to get your attention and interupt you.

## Components

* [Hubot Scripts](https://github.com/TinkurLab/TinkurRadiator_Hubot)
  * Listens for chat room messages and interacts with the user conversationally using hubot-conversation package
* [Node Service](https://github.com/TinkurLab/TinkurRadiator_NodeService)
  * Recieves updates from Hubot, logging logs when events are reported 
  * Provides status to Checker Checker componet for event that were reported 
* [Raspberry Pi Checker and Radiator](https://github.com/TinkurLab/TinkurRadiator_Checker)
  * Polls Node Service compoent to check is there was a recent event reported
  * Toggles information radiators on and off (ex. blinky lights, sounds, etc)

### Hubot Scripts Component 

TODO

## Backlog and Board

[Waffle Board](https://waffle.io/TinkurLab/P1InfoRadiator)

## Resources

* [Heroku Getting Started w/ Node.js Apps](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [Hubot Docs](https://hubot.github.com/)
* [Node Persist Docs and Repo](https://github.com/simonlast/node-persist)
* [Basic Node.js HTTP Server example](http://howtonode.org/hello-node)
* [Raspberry Pi Powertail Control](https://learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-13-power-control.pdf)
* [Python Request library guide](http://docs.python-requests.org/en/latest/user/quickstart/#response-content)
* [Python Language Ref](http://www.tutorialspoint.com/python/index.htm)
* [Node.js Language Ref](http://www.tutorialspoint.com/nodejs/index.htm)
* [Coffee Script Lint](http://www.coffeelint.org/)
* [eBook: Automation and Monitoring with Hubot](https://leanpub.com/automation-and-monitoring-with-hubot/read#leanpub-auto-cross-script-communication-with-events)
* [Regular Expression Validator / Builder](http://rubular.com/)


