var exec = require("child_process").exec

exec("date", function(err, stdout, stderr){
  console.log("--- result of exec 1");
  console.log(stdout);
});

exec("date -Iseconds", function(err, stdout, stderr){
  console.log("--- result of exec 2");
  console.log(stdout);
});

var spawn = require("child_process").spawn
var result = spawn("date");
result.stdout.on("data", function(data){
  console.log("--- result of spawn 1");
  console.log(data.toString());
});

var result = spawn("date", ["-Iseconds"]);
result.stdout.on("data", function(data){
  console.log("--- result of spawn 2");
  console.log(data.toString());
});

var result = spawn("date", ["-Iseconds"], {shell:true});
result.stdout.on("data", function(data){
  console.log("--- result of spawn 3");
  console.log(data.toString());
});


