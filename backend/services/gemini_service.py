import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)


def generate_roadmap(career, level, hours):

    prompt = f"""
You are SkillBridge AI, an expert career and learning-roadmap assistant.

Create a practical and realistic learning roadmap for a student.

User information:

Career Goal: {career}
Current Skill Level: {level}
Available Study Time: {hours} hours per day

The roadmap should help the student progress from their current level
towards being job-ready for their chosen career.

Include:

1. A short personalized summary.
2. A structured learning roadmap divided into stages.
3. Recommended hands-on projects.
4. Recommended learning resources.
5. A weekly study plan.
6. Important skill gaps the student should focus on.
7. Practical tips for progressing consistently.

Keep the recommendations realistic for a student.

Return the response as valid JSON only.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
    )

    return response.text