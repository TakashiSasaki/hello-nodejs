var spawn = require("child_process").spawn;
var p = spawn("od", ["-t", "x1"], { stdio: ['pipe', process.stdout, process.stderr]});

p.on("exit", function(code){
  console.log(code);
});

p.on("error", function(err) {
  console.error(err);
  process.exit(1);
});

p.on("data", function(data){
  console.log(error);
});

p.stdin.write("abcdefghijklmnopqrstuvwxyz");
p.stdin.destroy();

