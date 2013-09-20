var test = require('tap').test
var truthy = require('../');

test('object loads', function(t){
  var truthy = require('../');
  t.ok(truthy, 'object loaded');
  t.end();
})  

test('truthy value is true', function(t){
  var _truthyValue = 'YeS';
  var _result = truthy(_truthyValue);
  t.equal(_result, true, 'value should test true');

  _truthyValue = 1;
  _result = truthy(_truthyValue);
  t.equal(_result, true, 'value should test true');

  t.end();
})

test('truthy value is false', function(t){
  var _falsyValue = 'no';
  var _result = truthy(_falsyValue);
  t.equal(_result, false, 'value should test false');

  _falsyValue = 'false';
  _result = truthy(_falsyValue);
  t.equal(_result, false, 'value should test false');

  _falsyValue = 0;
  console.log(_falsyValue);
  _result = truthy(_falsyValue);
  t.equal(_result, false, 'value should test false');

  t.end();
})

