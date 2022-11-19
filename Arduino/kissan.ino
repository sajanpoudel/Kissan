#include <math.h>
//defining the pin for moisture sensor
const int pinMosSensor = A1;

const int B=4275;                 // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A5;     // Grove - Temperature Sensor connect to A5
 
float sensorValue; 
int a;
float moisturePercentage;
void setup() { 
 Serial.begin(9600); 
} 
void loop() { 
  //Moisture Sensor Reading
  sensorValue =analogRead(pinMosSensor);
  moisturePercentage = ( ( (sensorValue/1023.00) * 100 ));
  //Temp sensor reading
  a = analogRead(pinTempSensor);  
  float R = 1023.0/((float)a)-1.0;
  R = 100000.0*R;
  float temperature=1.0/(log(R/100000.0)/B+1/298.15)-273.15;//convert to temperature via datasheet ;
 
  if(sensorValue > 480){
    Serial.print("Soil Type: Moist\t\tMoisture Value:\t"); 
    Serial.print(sensorValue);
    Serial.print("\t\tMoisture Percent:\t");
    Serial.print(moisturePercentage);
    Serial.print("\t\ttemperature:\t");
    Serial.println(temperature);
    delay(5000);
   }
  else{
    Serial.print("Soil Type: Dry\t\tMoisture Value:\t"); 
    Serial.print(sensorValue);
    Serial.print("\t\tMoisture Percent:\t");
    Serial.print(moisturePercentage);
    Serial.print("\t\ttemperature\t");
    Serial.println(temperature);
    delay(5000);
 }

} 