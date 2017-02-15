var vm = require("vm");
vm.runInThisContext("console.log(1);a=1;");
console.log(a);

var sandbox = {console:console};
vm.runInNewContext("console.log(2);b=2", sandbox);
console.log(sandbox);

var https = require("https");
https.get("https://jsdo.it/TakashiSasaki/SUrg/js", function(res){
  res.on("data", function(data){
    console.log(data.toString());
    vm.runInNewContext(data, sandbox);
  });
});

