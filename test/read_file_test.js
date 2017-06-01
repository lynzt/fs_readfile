'use strict';
var chai = require('chai');
var readFile = require('./../lib/read_file');
var expect = chai.expect;

describe('test readFile', function() {
  it('should return formatted durations', function() {
    var filepath = process.cwd() + "/test/fixtures/";
    var filename = '1790washington.txt';
    return readFile.readFileAdditionalInfo(filepath, filename, "utf8").then(function (results) {
      expect(results.filepath).to.match(/test\/fixtures\/$/);
      expect(results.filename).to.equal('1790washington.txt');
      expect(results.contents).to.match(/^I embrace with/);
    });

  });

});
