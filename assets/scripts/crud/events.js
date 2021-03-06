'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');
const getFormFields = require('../../../lib/get-form-fields.js');
//const glob = require('./global.js');

const onGetAll = function(event) {
  event.preventDefault();
  // if (store.user) {
  api.getAll() // NEEDS TO BE UPDATED.
    .then(ui.getAllSuccess)  //getAllSuccess needs to be updated
    .catch(ui.failure);
  // }
};

const onGetLibraries = function() {
  // event.preventDefault();
  if (store.user) {
  api.getLibraries()
    .then(ui.getLibrariesSuccess)
    .catch(ui.failure);
  }
};

const onCreateLib = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createLib(data)
    .then(ui.createLibSuccess)
    .then(function() {
      onGetLibraries();
    })
    .catch(ui.createFailure);
};

const onUpdateLib = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(event.target);
  api.updateLib(data)
    .then(ui.updateLibSuccess)
    .then(function() {
      onGetLibraries();
  })
    .catch(ui.updateFailure);
};

const onDeleteLib= function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteLib(data)
    .then(ui.deleteLibSuccess)
    .then(function() {
      onGetLibraries();
  })
    .catch(ui.failure);
};

const getAllHandler = () => {
  $('#get').on('click', onGetAll);
  $('.createLibrary').on('submit', onCreateLib);
  $('#updateLibName').on('submit', onUpdateLib);
  $('#deleteLib').on('submit', onDeleteLib);
  $('#get-libraries').on('click', onGetLibraries);
};

module.exports = {
  onGetAll,
  onGetLibraries,
  getAllHandler,
  onCreateLib,
  onUpdateLib,
  onDeleteLib,
};
