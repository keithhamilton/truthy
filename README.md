truthy
=========

stupid-simple truthy value test
  
Returns a primitive boolean: true if test value is truthy, false if falsy.

# usage
```  
var truthy = require('truthy');

var truthyValue = truthy('YeS'); // returns true
if(truthy('TRUE')){
  console.log('value is true');
}

var falsyValue = truthy('no'); // returns false
var otherFalsyValue = truthy(0);
```

## License
Copyright (c) 2013 Keith Hamilton  
Licensed under the MIT license.







