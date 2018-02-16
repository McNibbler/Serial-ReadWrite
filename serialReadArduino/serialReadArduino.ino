//Test program to get Serial Working
const int ledPin = 13;
int x = 0;

void setup()
{
  Serial.begin(9600); // USB is always 12 Mbit/sec
  pinMode(ledPin, OUTPUT);
}

void loop()
{
  digitalWrite(ledPin, HIGH);   // set the LED on
  Serial.print("Hello World...");
  Serial.println(x);
  x++;
  delay(600);                  // wait for a second
  digitalWrite(ledPin, LOW);    // set the LED off
  delay(600);                  // wait for a second
}

