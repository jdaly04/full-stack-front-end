'use strict';

const api = require('./api');
const ui = require('./ui');
const store = require('../store.js');

const onGetAll = function(event) {
  event.preventDefault();
  if (store.user) {
  api.getAll() // NEEDS TO BE UPDATED.
    .then(ui.getAllSuccess)  //getAllSuccess needs to be updated
    .catch(ui.failure);
  }
};

const getAllHandler = () => {
  $('#get').on('click', onGetAll);
};

module.exports = {
  onGetAll,
  getAllHandler,
};
