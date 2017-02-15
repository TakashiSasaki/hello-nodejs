var http = require("http")
var url = require("url");

http.createServer(function(req, res){

  if(req.method==="GET"){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true);
    res.write(JSON.stringify(params));
    res.write("\n");
    res.end("Hello GET");
  }//if
 
  if(req.method==="POST"){
    var body ="";
    req.on("data", function(data){
      body+=data;
    });
    req.on("end", function(){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      var params = url.parse(req.url, true);
      res.write(JSON.stringify(params));
      res.write("\n");
      res.write(body);
      res.write("\n");
      res.end("Hello POST");
    });
  }//if

}).listen(10080, "127.0.0.1");

