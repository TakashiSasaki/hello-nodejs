console.log(process.argv);

for(var i in process.argv) {
  var s = encodeURIComponent(process.argv[i]);
  console.log(s);
}

var spawn = require("child_process").spawn;
var result = spawn(process.argv[2], process.argv.slice(3));
result.stdout.on("data", function(data){
  console.log(data.toString());
});

