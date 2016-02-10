# Description:
#   Hubot script to listen for "p1" in chats and notify API used by Raspberry Pi to radiate information
#
# Commands:
#   tinkurbot p1 - turn on the P1 Fire Alarm
#	
# Author:
#   Created by Tinkurlab www.tinkurlab.com
#   https://github.com/TinkurLab/P1InfoRadiator

module.exports = (robot) ->

   robot.hear /p1/i, (res) ->
    data = JSON.stringify({p1: 'true'})
    robot.http("https://enigmatic-oasis-13896.herokuapp.com/put")
    .header('Content-Type', 'application/json')
    .post(data) (err, res, body) ->
      # your code here

    res.send "I notified the blinky light!"