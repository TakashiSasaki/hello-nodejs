var http = require("http")
var option = {
  host: "www.example.com",
  port: "80",
  method: "GET"
};

var callback = function(x){
  console.log("callback");
};

req = http.request(option);

req.on("response", function(response){
  console.log("on request");
  response.on("data", function(data){
    console.log("on data"); 
  });
  response.on("end", function(data){
    console.log("on end"); 
  });
  response.on("close", function(data){
    console.log("on close"); 
  });
});

req.end();


