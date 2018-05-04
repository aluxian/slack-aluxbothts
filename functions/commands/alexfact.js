const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  const facts = [
    'Alex created me in about 2 hours 🛠',
    'Alex bought a green squishy for himself 🦖',
    'Alex is currently temporarily single 😉',
    'Alex drinks Huel 🥤',
    'Alex has programmed in javascript, php, c, c++, python, scala, java, haskell, go, html, css, coffeescript, less, sass, ruby, c#, assembly, swift, obj-c, sql, matlab, bash, fish, awk, and cql (his own) 🙀',
    'Alex\'s favourite alcoholic drink is Martini but Disaronno is a close second 🍸',
    'Alex has a collection of stickers, but he hasn\'t counted how many yet ✉️🏷',
  ];
  const i = parseInt(text) || Math.floor(Math.random()*facts.length);
  const factText = facts[i];
  callback(null, {
    text: `alexfact *#${i}*: ${factText}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};
