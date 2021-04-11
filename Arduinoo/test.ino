
#include <Servo.h>
char CurrentValue;
float StartValue;
Servo Rocket;
int delayVal = 30000;
float LastValue = 0;
int ServPos;
float slope;  
int TotalGainz;
byte buff[4];
void setup() {
  Serial.begin(9600);
  // put your setup code here, to run once:
  Rocket.attach(9);
  delay(1000);
  pinMode(2,OUTPUT);
  pinMode(3,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
if(Serial.available()>0)
{
   CurrentValue = Serial.read();
}
if(CurrentValue == 'g'){
  Rocket.write(135);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}
if(CurrentValue == 'b'){
  Rocket.write(45);
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
}
if(CurrentValue == 'd'){
  Rocket.write(135); 
   digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
}
if(CurrentValue == 'e'){
  Rocket.write(45);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}

if(CurrentValue == 'n'){
  Rocket.write(70);
  digitalWrite(3,LOW);
  digitalWrite(2,HIGH);
}

if(CurrentValue == 'q'){
  Rocket.write(180);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}
if(CurrentValue == 'z'){
  Rocket.write(180);
  digitalWrite(3,LOW);
  digitalWrite(2,HIGH);
}
if(CurrentValue == 'w'){
  Rocket.write(10);
  digitalWrite(3,LOW);
  digitalWrite(2,HIGH);
}

if(CurrentValue == 'r'){
  Rocket.write(110);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}
if(CurrentValue == 't'){
  Rocket.write(110);
  digitalWrite(3,LOW);
  digitalWrite(2,HIGH);
}
if(CurrentValue == 'o'){
  Rocket.write(70);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}
if(CurrentValue == 'a'){
  Rocket.write(10);
  digitalWrite(3,HIGH);
  digitalWrite(2,LOW);
}
if(CurrentValue ==  'l'){
  Rocket.write(90);
}


delay(5000);
}
