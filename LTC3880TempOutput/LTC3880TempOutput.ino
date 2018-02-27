#include <Wire.h>

void setup() {
  Wire.begin(); // Initiate the Wire library
  Serial.begin(9600);
  Serial.println("Read ALL Reg - Justin and Arjun");
  Serial.println("------------------------------------------");
  delay(100);
}
void loop() {
  readReg((uint8_t) 0x5A, (uint8_t) 0x8E);
  
  delay(1000);
  
}

void readReg(uint8_t deviceAddress, uint8_t regAddress) {
  Wire.beginTransmission( deviceAddress );
  Wire.write( regAddress );
  Wire.endTransmission( false );
  
  Wire.requestFrom((uint8_t) deviceAddress, (uint8_t) 1 , (uint8_t) true );
  
  if ( Wire.available() >= 1 )
  {
    int result = Wire.read() ;
    Serial.println( result, HEX );
  } 
}

