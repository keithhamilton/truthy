/**
 * @fileoverview 
 * converts input paramater to string, then lowercase, 
 *      then tests whether the input is in the list of
 *      truthy values
 */

/**
 * truthy
 @param {testValue} the value to test
 @return {truthy} boolean value
 */

var truthy = function(testValue){
  var truthyValue;
  var TRUTHY_VALUES;
  var valueIsTruthy;
  
  valueIsTruthy = false;
  TRUTHY_VALUES = [
    'yes',
    'true',
    '1',
    'ok',
    //and, just because...
    'correct',
    'absolutely',
    'definitely',
    'naturally',
    'hell yeah',
    'of course',
    'right',
    'veritable',
    'proper',
    'bona fide',
    'shit yes',
    'busters',
    'at last',
    'natch'
  ]

  if(testValue){

    truthyValue = testValue.toString().toLowerCase();

    if (TRUTHY_VALUES.indexOf(truthyValue) > -1){
      valueIsTruthy = true;
    }
    
  }

  return(valueIsTruthy);
}

module.exports = truthy;
