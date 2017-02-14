var exec = require("child_process").exec
exec("date", function(err, stdout, stderr){
  console.log(stdout);
});

