from flask import Flask, request, jsonify
from flask_cors import CORS
import requests, os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Backend is working!"}), 200

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Welcome to the Solar AI Backend"}), 200

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL = "llama3-8b-8192"

# --- Chatbot Route ---
@app.route("/ai/chat", methods=["POST"])
def chat():
    user_msg = request.json.get("message", "")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": "You are a solar PV expert for rooftop installations."},
            {"role": "user", "content": user_msg}
        ]
    }

    try:
        res = requests.post(GROQ_API_URL, headers=headers, json=data)
        res.raise_for_status()
        output = res.json()
        content = output["choices"][0]["message"]["content"]
        return jsonify({"response": content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- Smart Design Route ---
@app.route("/ai/design", methods=["POST"])
def design():
    data = request.json
    location = data.get("location", "")
    area = data.get("area", "")
    consumption = data.get("consumption", "")

    if not (location and area and consumption):
        return jsonify({"error": "Missing location, area or consumption"}), 400

    prompt = f"""
    Suggest a rooftop solar system design based on the following:
    Location: {location},
    Available area: {area} m²,
    Monthly consumption: {consumption} kWh.
    Provide recommended system size (kWp), number of panels, orientation, tilt angle, and estimated output.
    """

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": "You are a solar PV designer assistant."},
            {"role": "user", "content": prompt}
        ]
    }

    try:
        res = requests.post(GROQ_API_URL, headers=headers, json=payload)
        res.raise_for_status()
        result = res.json()
        content = result["choices"][0]["message"]["content"]
        return jsonify({"response": content})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)