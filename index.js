 
var buckle = require('buckle');
 
buckle.open('big.zip', 'Zip-Extractor', function(err, result) {
  console.log(err || result);
})