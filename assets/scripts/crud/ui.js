'use strict';

//const store = require('./store');

const getAllSuccess = () => {
  console.log('Happening');
  // SHOW ALL FUNDRAISERS IN A TABLE. Be able to add to Library via button
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  getAllSuccess,
};
