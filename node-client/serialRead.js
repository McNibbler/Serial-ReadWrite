var SerialPort = require('serialport');
var port = new SerialPort('COM5', { 
    autoOpen: false,
    baudRate: 9600
 });

// var five = require("johnny-five");
// var board = new five.Board();

port.open(function (err) {
    if (err) {
      return console.log('Error opening port: ', err.message);
    }
   
    // Because there's no callback to write, write errors will be emitted on the port:
    port.write('main screen turn on');
  });
   
// Switches the port into "flowing mode"
port.on('data', function (data) {
    console.log('Data1:', data.toString('ascii'));
  });
console.log("hello Arjun");