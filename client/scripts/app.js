
var app = {
  init: function() {},
  
  send: function(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        // console.log('chatterbox: Message sent');
        // console.log(this.data);
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  
  fetch: function() {
    // "get" from server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      success: function (data) {
        // console.log('chatterbox: Message sent');
        // console.log(this.data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  
  clearMessages: function() {},
  
  renderMessage: function() {},
  // add class username
   
  renderRoom: function() {},
  
  server: 'http://parse.sfm6.hackreactor.com/'
  
};

$( document ).ready(function() { 
  // sends message to server 
  $('#send-message').on('click', function(event) {
    var indexOfEqual = (window.location.search).indexOf('=');
    
    var message = {
      username: window.location.search.slice(indexOfEqual + 1),
      text: $('.textbox').val(),
      roomname: $('#roomName').val()
    };
    app.send(message);
    $('.textbox').val('');
  });
  
  // retrieve updated feed from server
  $('#refresh').on('click', function(event) {
    var fetchedMessages = app.fetch().results;
  });
    
});


// $.ajax({message object})


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









// Display messages retrieved from the parse server.

// Use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable XSS attacks. See the section about escaping below.


// Allow users to select a user name for themself and to be able to send messages


// Allow users to create rooms and enter existing rooms - Rooms are defined by the .roomname property of messages, so you'll need to filter them somehow.

// Allow users to 'befriend' other users by clicking on their user name
// Display all messages sent by friends in bold