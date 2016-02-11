# Description:
#  Hubot script to have a conversation
#
# Commands:
#   hubot there is a moose outside - sends apples to the moose
#
# Author:
#   Created by Tinkurlab www.tinkurlab.com
#   based on examples at hubot-conversation
#

Conversation = require('hubot-conversation')

module.exports = (robot) ->

  switchBoard = new Conversation(robot)

  robot.respond /there is a moose outside/, (msg) ->
    dialog = switchBoard.startDialog(msg)
    
    msg.reply "Oh no!  Should I notify everyone? (yes|no)"
    dialog.addChoice /yes/i, (msg2) ->

      msg2.reply "Ok, I told them whats up!  Should I sound the alarm? (yes|no)"
      dialog.addChoice /yes/, (msg3) ->
        msg3.reply "Alarm activated!"

      dialog.addChoice /no/, (msg3) ->
        msg3.reply "Ok, but I think it was a good idea."

    dialog.addChoice /no/i, (msg2) ->
      msg.reply "Whew!  You scared me..."


