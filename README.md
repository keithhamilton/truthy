truthy
=========

stupid-simple truthy value test
  
I looked up 'true' on thesaurus.com and added in many synonmys for 'true' so if your data set contains values like 'veritable,' 'shit yeah,' or 'bona fide,' you too can resolve them to truthy values!

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







