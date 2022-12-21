
#include <Servo.h>
#define echoPin 5 
#define trigPin 4 
#define servoPin 14 
Servo servo;
// defines variables
long duration; 
int distance; 

void setup() {
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  Serial.begin(9600); 

  servo.attach(servoPin);
  servo.write(0);
}
void loop() {

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  
  distance = duration * 0.034 / 2; 

  Serial.println("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  if(distance<200)
  {
    Serial.print("Not so fast criminal!");
    servo.write(0);
    delay(100);
    servo.write(180);
    delay(100);
  }
  //input micro servo code
  delay(300);
  
  
}
