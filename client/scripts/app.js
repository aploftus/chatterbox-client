// use this URL http://parse.sfm6.hackreactor.com/chatterbox/classes/messages

// POST MESSAGES
// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });

// Display messages retrieved from the parse server.

// Use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable XSS attacks. See the section about escaping below.
// Note: If you issue an XSS attack, you must make it innocuous enough to be educational, rather than disruptive. Basically you should scope your attacks to be console.logs or minor style changes. The following are not allowed:

// alerts
// adding or removing dom elements
// auto-posting
// DDOS attacks
// Setup a way to refresh the displayed messages (either automatically or with a button)

// Allow users to select a user name for themself and to be able to send messages


// Allow users to create rooms and enter existing rooms - Rooms are defined by the .roomname property of messages, so you'll need to filter them somehow.

// Allow users to 'befriend' other users by clicking on their user name
// Display all messages sent by friends in bold