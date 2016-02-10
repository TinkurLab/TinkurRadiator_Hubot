// Description:
//  Hubot script to have a conversation
// 
// Commands:
//   tinkurbot clean the house - chat about cleaning the house
//   tinkurbot jump - chat about jumping
//
// Author:
//   Created by Tinkurlab www.tinkurlab.com
//   based on examples at hubot-conversation
//

var Conversation = require('hubot-conversation');

module.exports = function (robot) {

    var switchBoard = new Conversation(robot);

    robot.respond(/there is an outage/, function (msg) {
        var dialog = switchBoard.startDialog(msg);

        msg.reply('Oh no!  Should I notify everyone? (yes|no)');
        dialog.addChoice(/yes/i, function (msg2) {
            msg2.reply('Ok, I told them what\'s up!  Should I sound the alarm? (yes|no)');
            dialog.addChoice(/yes/, function (msg3) {
                msg3.reply('Alarm activated!');
            });
            dialog.addChoice(/no/, function (msg3) {
                msg3.reply('Ok, but I think it was a good idea.');
            })

        });
        dialog.addChoice(/no/i, function (msg2) {
            msg.reply('Whew!  You scared me...');
        });
    });

    robot.respond(/jump/, function (msg) {
        var dialog = switchBoard.startDialog(msg);
        msg.reply('Sure, How many times?');
        
        dialog.addChoice(/([0-9]+)/i, function (msg2) {
            var times = parseInt(msg2.match[1], 10);
            for (var i = 0; i < times; i++) {
                msg.emote("Jumps"); //We can use the original message too.
            }
        });
    });
    
    
  robot.respond(/.*the mission/, function (msg) {
        msg.reply('Your have 5 seconds to accept your mission, or this message will self-destruct');
        var dialog = switchBoard.startDialog(msg, 5000); //5 Second timeout
        dialog.timeout = function (msg2) {
            msg2.emote('Boom');
        }
        dialog.addChoice(/yes/i, function (msg2) {
            msg2.reply('Great! Here are the details...');
        });
    });
};