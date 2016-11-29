'use strict';

require('./example');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();
//  $('#ch-password').hide();
//  $('#sign-out-button').hide();
//  $('#new-game').hide();
//  $('#game-stats').hide();
  //when your document is fully loaded, then this code will run. the DOM has been
  // constructed. if you're trying to use an API, check the README doc to kno                            // what the specs are
});
