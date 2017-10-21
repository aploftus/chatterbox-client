
var app = {
  rawData: {},
  
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  
  init: function() {},
  
  send: function(message) {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },
  
  fetch: function() {
    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      success: function (data) {
        console.log('incoming data: ');
        console.log(data);
        app.rawData = data.results;
        app.rawData.forEach(function(message) {
          app.renderMessage(message);
        });
      },
      error: function (data) {
        console.error('chatterbox: Failed to fetch message');
      }
    });
  },
  
  clearMessages: function() {
    $('#chats').html('');
  },
  
  renderMessage: function(message) {
    // create an HTML element
    var $newMessage = $('<div></div>').addClass('chat');
    // populate element with username (attach class="username"), message
    var $timestamp = $('<div>' + message.createdAt + '</div>');
    var $username = $('<span class="username"></span>');
    var $messageText = $('<span></span>').text(': ' + message.text);
    
    $username.addClass(message.username).text(message.username);
    $newMessage.append($timestamp, $username, $messageText);
    // prepend element to DOM at div id="chats"
    $('#chats').prepend($newMessage);
  },
   
  renderRoom: function(roomName) {
    var $roomOption = $('<option></option>').val(roomName).text(roomName);
    $('#roomSelect').append($roomOption);
      
  },
  
  handleUserNameClick: function($user) {
    $('#chats').find('.' + $user).css('font-weight', 'bold');
  },
  
  handleSubmit: function() {
    
  }
  
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
    app.fetch();
    // var friendsList = {};
    // fetchedMessages.forEach(function (message) {
    //   app.renderMessage(message);
    //   // add username to friends list if not already there
    //   if ($('ul li').filter(function(friend) {
    //     return friend.text() === message.username;
    //   }).length === 0) {
    //     $('#main ul').append('<li>' + message.username + '</li>').addClass('username' + message.username);
    //   }
      
    // });
  });
  
  $('.username').on('click', function(event) {
    var $user = $(this).val();
    $(this).css('font-weight', 'bold');
    app.handleUserNameClick($user);
  });
    
});


// friendsList

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