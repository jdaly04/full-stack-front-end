'use strict';

//const store = require('./store');
//const readData = JSON.parse(data);
const getAllFundraisers = require('../templates/fundraisers.handlebars');
const createLibrary = require('../templates/libraries.handlebars');
//const store = require('../store.js');

const getAllSuccess = (data) => {
  $('.list-of-fundraisers').html(getAllFundraisers(data));
  console.log(data);

  // SHOW ALL FUNDRAISERS IN A TABLE. Be able to add to Library via button
};

const createLibSuccess = (data) => {
//  $('.show-library').html('My Library');
  console.log(data);
  $('.show-library').html(createLibrary(data));

};

const updateLibSuccess = (data) => {
  console.log('working!');
  console.log(data);
};

const deleteLibSuccess = () => {
  console.log('working!');
  $('.show-library').hide();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  getAllSuccess,
  createLibSuccess,
  updateLibSuccess,
  deleteLibSuccess,
};
