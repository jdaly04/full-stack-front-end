'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');
const getFormFields = require('../../../lib/get-form-fields.js');
//const glob = require('./global.js');

const onGetAll = function(event) {
  event.preventDefault();
  if (store.user) {
  api.getAll() // NEEDS TO BE UPDATED.
    .then(ui.getAllSuccess)  //getAllSuccess needs to be updated
    .catch(ui.failure);
  }
};

const onCreateLib = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createLib(data) // NEEDS TO BE UPDATED.
    .then(ui.createLibSuccess)  //getAllSuccess needs to be updated
    .catch(ui.failure);
};

const onUpdateLib = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.updateLib(data)
    .then(ui.updateLibSuccess)
    .catch(ui.failure);
};

const onDeleteLib= function(event) {
  event.preventDefault();
  let id = $(event.target).data('id');
  api.deleteLib(id)
    .then(ui.deleteLibSuccess)
    .catch(ui.failure);
};



const getAllHandler = () => {
  $('#get').on('click', onGetAll);
  $('.createLibrary').on('submit', onCreateLib);
  $('#update').on('submit', onUpdateLib);
  $('#delete').on('click', onDeleteLib);
};

module.exports = {
  onGetAll,
  getAllHandler,
  onCreateLib,
  onUpdateLib,
  onDeleteLib,
};