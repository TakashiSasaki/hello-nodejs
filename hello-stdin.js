process.stdin.setEncoding("binary");
process.stdin.on("data", function(data){
  console.log(data);
});

