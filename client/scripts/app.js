

// something to grab the username? is this already stored somewhere? location.search?

// something to create / put together the message from textbox input and username


// something to grab messages from server (get request) (jquery $.ajax)
// happens more than once (refresh button or periodic get request)
// and display those messages

// when we get messages from server, parse text to look for evil chars
// Escaping &, <, >, ", ', `, , !, @, $, %, (, ), =, +, {, }, [, and ] is almost enough
// Context is key

// function to filter master feed to selected room
// accomplish onclick of user selected

// function that creates a room in the room list
// it grabs the roomname from incoming messages OR from a user creating a new room
// it populates the "select" form with the room names

// a function to determine if a string is SAFE or UNSAFE
// usernames, text we type, messages we get from server


// something to post/give the server a new message created on our client side
// when we post, maybe immediately "get" new messages




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


// Allow users to select a user name for themself and to be able to send messages


// Allow users to create rooms and enter existing rooms - Rooms are defined by the .roomname property of messages, so you'll need to filter them somehow.

// Allow users to 'befriend' other users by clicking on their user name
// Display all messages sent by friends in bold