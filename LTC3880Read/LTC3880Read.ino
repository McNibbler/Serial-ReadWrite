#include <Wire.h>

void setup() {
  Wire.begin(); // Initiate the Wire library
  Serial.begin(9600);
  Serial.println("Read ALL Reg - Justin and Arjun");
  Serial.println("------------------------------------------");
  delay(100);
}
void loop() {
  Serial.println("Begin Read");

  for(int i = 0; i < (uint8_t) 0xFD; i++){
    readReg((uint8_t) 0x5A, (uint8_t) i);
  }
  //readReg((uint8_t) 0x5A, (uint8_t) 0x01);
 

  
  delay(5000);
  
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

