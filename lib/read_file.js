'use strict';
var self = module.exports;
var Promise = require("bluebird");
var fs = require('fs');

exports.readFileAdditionalInfo = function(filepath, filename, encoding) {
  return new Promise(function(resolve, reject){
    fs.readFile(filepath + filename, encoding, function (err, value) {
      if (err) {
        reject(err);
      } else {
        resolve({'filepath': filepath, 'filename': filename, 'contents': value});
      }
    });
  });
}
