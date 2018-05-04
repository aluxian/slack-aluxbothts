const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const request = require('request');


/**
* app_mention event
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  if (text.startsWith('<@UAJHG1D99>')) {
    request({
      method: 'POST',
      url: 'https://api.dialogflow.com/v1/query?v=20150910',
      json: true,
      body: {
        "lang": "en",
        "query": text.replace('<@UAJHG1D99>', ''),
        "sessionId": user
      },
      headers: {
        'Authorization': 'Bearer 688560499af743f9868d45ca8315ad2e',
      }
    }, function(error, response, body) {
      if (body && body.result && body.result.fulfillment && body.result.fulfillment.speech) {
        callback(null, {
          text: body.result.fulfillment.speech,
        });
      } else {
        callback(null, {
          text: "i can't access my brain, call Alex " + JSON.stringify({error,response,body})
        });
      }
    });
  } else {
    callback(null, {});
  }

};
