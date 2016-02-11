# Description:
#  Hubot script to have a conversation
#
# Commands:
#   hubot there is an outage - starts conversation about announcing and alerting
#
# Author:
#   Created by Tinkurlab www.tinkurlab.com
#   based on examples at hubot-conversation
#

Conversation = require('hubot-conversation')

module.exports = (robot) ->

  switchBoard = new Conversation(robot)

  robot.respond /there is an outage/, (msg) ->
    dialog = switchBoard.startDialog(msg)
    
    msg.reply "Oh no!  Should I notify everyone? (yes|no)"
    dialog.addChoice /yes/i, (msg2) ->

      #TODO: Notify people!

      msg2.reply "Ok, I everyone!  Should I sound the alarm? (yes|no)"
      dialog.addChoice /yes/, (msg3) ->

        data = JSON.stringify({p1: 'true'})
        robot.http("https://tinkurradiator.herokuapp.com/put")
        .header('Content-Type', 'application/json')
        .post(data) (err, res, body) ->

        msg3.reply "Alarm activated!  Thanks for your help."

      dialog.addChoice /no/, (msg3) ->
        msg3.reply "Ok, but I think it was a good idea."

    dialog.addChoice /no/i, (msg2) ->
      msg.reply "Whew!  You scared me..."

  robot.hear /p1/i, (res) ->
    res.send "Use the 'there is an outage' command if there is an outage"