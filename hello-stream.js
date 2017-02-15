var fs = require("fs");
var stream = fs.createReadStream("/dev/random");
stream.setEncoding("binary");
stream.once("data", function(data){
  console.log(toString.call(data) + " " + data.length);
  process.exit(0);
});


