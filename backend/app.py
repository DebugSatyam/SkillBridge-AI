from flask import Flask, request, jsonify
from flask_cors import CORS

from services.gemini_service import generate_roadmap

app = Flask(__name__)

CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "SkillBridge AI Backend Running 🚀"
    })


@app.route("/generate-roadmap", methods=["POST"])
def roadmap():

    try:
        data = request.get_json()

        career = data.get("career")
        level = data.get("level")
        hours = data.get("hours")

        if not career or not level or not hours:
            return jsonify({
                "success": False,
                "error": "Missing required information"
            }), 400

        roadmap = generate_roadmap(
            career,
            level,
            hours
        )

        return jsonify({
            "success": True,
            "roadmap": roadmap
        })

    except Exception as e:

        print("Error:", e)

        return jsonify({
            "success": False,
            "error": "Failed to generate roadmap"
        }), 500


if __name__ == "__main__":
    app.run(debug=True)