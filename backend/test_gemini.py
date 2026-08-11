import os
from dotenv import load_dotenv
from services.gemini_service import generate_roadmap

load_dotenv()


def main():
    print("Testing Gemini roadmap generation...")

    career = "Data Analyst"
    level = "Beginner"
    hours = 3

    roadmap = generate_roadmap(career, level, hours)
    print(roadmap)


if __name__ == "__main__":
    main()
