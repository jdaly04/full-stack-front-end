'use strict';

//const store = require('./store');
//const readData = JSON.parse(data);

const getAllSuccess = (data) => {
  console.log(data);

  // SHOW ALL FUNDRAISERS IN A TABLE. Be able to add to Library via button
};

const createLibSuccess = (data) => {
  console.log('working!');
};

const updateLibSuccess = (data) => {
  console.log('working!');
};

const deleteFundSuccess = (data) => {
  console.log('working!');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  getAllSuccess,
  createLibSuccess,
  updateLibSuccess,
  deleteFundSuccess,
};
