import Adafruit_DHT
import json

# Set the GPIO pin where the DHT11 sensor is connected
DHT_PIN = 4

def read_temperature_data():
    temperature_data = []  # Initialize an empty list for temperature readings
    

    """
    Reads  temperature from the DHT11 sensor.
    Returns an array of  temperature values.
    """
    temperature = Adafruit_DHT.read_retry(11, DHT_PIN)
    if  temperature is not None:
         temperature_data.append(temperature)
    else:
        return None
    

def read_temperature_data():
    humidity_data = []  # Initialize an empty list for temperature readings
    

    """
    Reads  humidity data  from the DHT11 sensor.
    Returns an array of  humidity values.
    """
    humidity = Adafruit_DHT.read_retry(11, DHT_PIN)
    if  humidity is not None:
         humidity_data.append(humidity)
    else:
        return None
    


