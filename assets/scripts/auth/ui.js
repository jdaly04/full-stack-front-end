'use strict';

const store = require('../store');


const success = (data) => {
//  $('#messages').text('success');
  console.log(data);
};

const signUpSuccess = (data) => {
  store.token = data.user.token;
  $('#signUpModal').modal("hide");
};

const signInSuccess = (data) => { //if you have curly braces you can have more than one expression. without, only 1 expression allowed.
  store.user = data.user;
  success(data);
  $('#ch-password').show();
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('#signInModal').modal("hide");
  $('#patch').show();
  // $('#update').show();
  // $('#updateSubmit').show();
  $('#delete').show();
  $('#delete-button').show();
  $('#update-submit').show();
  $('#updateLibName').show();
  $('#create-form').show();
  $('#get-libraries').show();
  $('.list-of-fundraisers').show();
  $('.get-all-libraries').show();

  //  button for "My Library" should show up. when you click "my library, you should
  // see a table of your saved fundraisers. Then, you should be able to browse all,
  // and update your library by adding a new one, or be able to delete one from your
  // library.
};

const changePasswordSuccess = (data) => {
  $('#changePasswordModal').modal("hide");
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
  $('.list-of-fundraisers').hide();
  $('.get-all-libraries').hide();
};


const failure = (error) => {
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
