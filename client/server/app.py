from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    task_data = request.get_json()
    task = task_data.get('task')
    if task:
        tasks.append(task)
        return jsonify({"message": "Task added!"}), 201
    return jsonify({"error": "No task provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
