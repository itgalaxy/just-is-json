"use strict";

module.exports = function(text) {
  try {
    JSON.parse(text);
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false;
  }

  return true;
};
