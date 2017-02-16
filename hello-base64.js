var buffer = new Buffer(512);
buffer.fill(0);

for(var i=0; i<256; ++i){
  buffer.writeUInt8(i,i);
}
console.log(buffer.length);
console.log(buffer.toString("hex"));
var base64 = buffer.toString("base64");
console.log(base64);
var base64url = base64.replace(/\+/g,"-").replace(/\//g,"_");
console.log(base64url);

