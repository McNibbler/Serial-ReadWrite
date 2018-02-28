//Example POST method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: { temperature: "151rum" },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://localhost:3000/TempData", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});