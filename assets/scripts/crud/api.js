'use strict';

const config = require('../config');
const store = require('../store');

const getAll = (data) =>
$.ajax({
    url: config.host + '/fundraisers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });


module.exports = {
  getAll,
};
