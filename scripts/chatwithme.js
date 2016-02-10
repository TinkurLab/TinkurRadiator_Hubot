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

        //TODO: Ask what is impacted to send when everyone is notified

        //TODO: Change response case to lower to match YES, Yes, yes

        msg.reply('Oh no!  Should I notify everyone? (yes|no)');
        dialog.addChoice(/yes/i, function (msg2) {
            
            //TODO: Add notification to flows here

            msg2.reply('Ok, I told them what\'s up!  Should I sound the alarm? (yes|no)');
            dialog.addChoice(/yes/, function (msg3) {
                msg3.reply('Alarm activated!');
                
                //TODO: Add call to TinkurRadiator Node Service here

            });
            dialog.addChoice(/no/, function (msg3) {
                msg3.reply('Ok, but I think it was a good idea.');
            })

        });
        dialog.addChoice(/no/i, function (msg2) {
            msg.reply('Whew!  You scared me...');
        });
    });
};