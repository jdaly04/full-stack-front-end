'use strict';

const store = require('../store');


const success = (data) => {
  console.log(data);
  $('.messages').empty();
};

const signUpSuccess = (data) => {
  store.token = data.user.token;
  $('#signUpModal').modal("hide");
  $('#sign-up').trigger("reset");
  $('.messages').text('Signed up! Now sign in!');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#ch-password').show();
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('#signInModal').modal("hide");
  $('#patch').show();
  $('#delete').hide();
  $('#delete-button').hide();
  $('#update-submit').hide();
  $('#updateLibName').hide();
  $('#create-form').show();
  $('#get-libraries').show();
  $('.list-of-fundraisers').show();
  $('.get-all-libraries').show();
  $('#sign-in').trigger("reset");
  $('.messages').text('Success! You can now create a new library and/or view your current libraries! Soon, you can add fundraisers to libraries!(You can still view all the current fundraisers!)');




  //  button for "My Library" should show up. when you click "my library, you should
  // see a table of your saved fundraisers. Then, you should be able to browse all,
  // and update your library by adding a new one, or be able to delete one from your
  // library.
};

const changePasswordSuccess = (data) => {
  $('#changePasswordModal').modal("hide");
  $('#change-password').trigger("reset");
  $('.messages').empty();
  console.log(data);
};

const signOutSuccess = () => {
  $('#sign-in-button').show();
  $('#sign-up-button').show();
  $('#ch-password').hide();
  $('#sign-out-button').hide();
  $('#delete').hide();
  $('#delete-button').hide();
  $('#update-submit').hide();
  $('#updateLibName').hide();
  $('#create-form').hide();
  $('#get-libraries').hide();
  $('.get-all-libraries').hide();
  $('.get-all-libraries').empty();
  $('.list-of-fundraisers').empty();
  $('.messages').empty();
};


const failure = (error) => {
  $('.messages').text('Oops, something went wrong. Try again.');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
