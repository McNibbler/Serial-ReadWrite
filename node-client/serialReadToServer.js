var SerialPort = require('serialport');
var Client = require('node-rest-client').Client; 

var client = new Client();
var port = new SerialPort('COM5', { 
    autoOpen: false,
    baudRate: 9600
 });


port.open(function (err) {
    if (err) {
      return console.log('Error opening port: ', err.message);
    }
   
    // Because there's no callback to write, write errors will be emitted on the port:
    port.write('main screen turn on');
  });
   

  
//New Data into COM port
port.on('data', function (data) {
    console.log('Data1:', data.toString('ascii'));
    
    // set content-type header and data as json in args parameter 
    var args = {
        data: { temperature: data.toString('ascii') },
        headers: { "Content-Type": "application/json" }
    };
    
    client.post("http://localhost:3000/TempData", args, function (data, response) {
        // parsed response body as js object 
        console.log(data);
        // raw response 
        //console.log(response);
    });
  });