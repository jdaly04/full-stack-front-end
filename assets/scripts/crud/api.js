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

  const createLib = (data) =>
   $.ajax({
     url: config.host + '/libraries',
     method: 'POST',
     headers: {
       Authorization: 'Token token=' + store.user.token,
     },
     data,
   });

   const updateLib = (data) =>
    $.ajax({
    url: config.host + '/libraries/10',
    //url: 'http://localhost:4741/libraries/1',
      method: 'PATCH',
       headers: {
       Authorization: 'Token token=' + store.user.token,
       },
      data,
    });

    const deleteLib= () =>
     $.ajax({
       url: config.host + '/libraries/33',
        method: 'DELETE',
        headers: {
        Authorization: 'Token token=' + store.user.token,
        },
      });



module.exports = {
  getAll,
  createLib,
  updateLib,
  deleteLib,
};
