import json
import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY is not set in the .env file")

client = genai.Client(api_key=api_key)


def generate_roadmap(career, level, hours):

    prompt = f"""
You are SkillBridge AI, an expert career and learning-roadmap assistant.

Create a practical and realistic learning roadmap for a student.

User information:

Career Goal: {career}
Current Skill Level: {level}
Available Study Time: {hours} hours per day

Create a personalized roadmap that helps the student become
job-ready for their chosen career.

The roadmap must contain:

- A personalized summary
- Learning stages with topics
- Hands-on projects
- Learning resources
- A weekly study plan
- Important skill gaps
- Practical tips

Keep the roadmap realistic for a student.

Return ONLY valid JSON.
Do not include markdown.
Do not include ```json.
"""


    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
        config={
            "response_mime_type": "application/json"
        }
    )

    return json.loads(response.text)