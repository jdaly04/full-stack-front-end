'use strict';
const config = require('../config');
const store = require('../store');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });
