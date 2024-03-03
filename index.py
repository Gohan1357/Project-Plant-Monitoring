from flask import Flask, jsonify
import random

app = Flask(__name__)

def generate_random_numbers(min_value, max_value, count):
    """
    Generates an array of random numbers within a specified range.

    Parameters:
        min_value (int): The minimum value of the range (inclusive).
        max_value (int): The maximum value of the range (inclusive).
        count (int): The number of random numbers to generate.

    Returns:
        list: An array of random numbers within the specified range.
    """
    return [round(random.uniform(min_value, max_value), 2) for _ in range(count)]

# Endpoint to get temperature data
@app.route('/temperature', methods=['GET'])
def get_temperature():
    temperatures = generate_random_numbers(0, 100, 5)
    return jsonify({'temperature': temperatures}), 200

# Endpoint to get humidity data
@app.route('/humidity', methods=['GET'])
def get_humidity():
    humidities = generate_random_numbers(0, 100, 5)
    return jsonify({'humidity': humidities}), 200

# Endpoint to get moisture data
@app.route('/moisture', methods=['GET'])
def get_moisture():
    moistures = generate_random_numbers(0, 100, 5)
    return jsonify({'moisture': moistures}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
