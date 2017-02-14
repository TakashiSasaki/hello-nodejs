var spawn = require("child_process").spawn;

console.log("before spawn");
var p = spawn("date");
console.log("after spawn");

console.log("before p.on");
p.on("exit", function(code){
  console.log(code);
});
console.log("after p.on");

console.log("before p.stdout.on");
p.stdout.on("data", function(data){
  console.log(data);
});
console.log("after p.stdout.on");


console.log("before p.stderr.on");
p.stderr.on("data", function(data){
  console.log(data);
});
console.log("after p.stderr.on");

