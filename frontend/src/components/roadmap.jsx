function Roadmap({ roadmap }) {
  if (!roadmap) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ AI Generated Roadmap
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Personalized Roadmap
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            {roadmap.summary}
          </p>
        </div>


        {/* Learning Stages */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📚 Learning Roadmap
          </h3>

          <div className="space-y-6">

            {roadmap.learning_stages?.map((stage, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    {stage.stage || stage.name || `Stage ${index + 1}`}
                  </h4>

                </div>


                {/* Display stage information */}
                <div className="text-gray-600 space-y-2">

                  {Object.entries(stage).map(([key, value]) => {

                    if (
                      key === "stage" ||
                      key === "name"
                    ) {
                      return null;
                    }

                    return (
                      <div key={key}>

                        <p className="font-semibold text-gray-800 capitalize">
                          {key.replaceAll("_", " ")}
                        </p>

                        {Array.isArray(value) ? (
                          <ul className="list-disc list-inside ml-2">
                            {value.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {typeof item === "object"
                                  ? JSON.stringify(item)
                                  : item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{String(value)}</p>
                        )}

                      </div>
                    );

                  })}

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Hands-on Projects */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🛠️ Hands-on Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {roadmap.hands_on_projects?.map((project, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div className="text-3xl mb-4">
                  🚀
                </div>

                {Object.entries(project).map(([key, value]) => (

                  <div key={key} className="mb-3">

                    <p className="font-semibold text-gray-800 capitalize">
                      {key.replaceAll("_", " ")}
                    </p>

                    <p className="text-gray-600">
                      {Array.isArray(value)
                        ? value.join(", ")
                        : String(value)}
                    </p>

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>


        {/* Learning Resources */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📖 Learning Resources
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {roadmap.learning_resources?.map((resource, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition"
              >

                {Object.entries(resource).map(([key, value]) => (

                  <div key={key} className="mb-2">

                    <p className="font-semibold text-gray-800 capitalize">
                      {key.replaceAll("_", " ")}
                    </p>

                    <p className="text-gray-600">
                      {Array.isArray(value)
                        ? value.join(", ")
                        : String(value)}
                    </p>

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>


        {/* Skill Gaps */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 Important Skill Gaps
          </h3>

          <div className="flex flex-wrap gap-3">

            {roadmap.important_skill_gaps?.map((skill, index) => (

              <span
                key={index}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>


        {/* Practical Tips */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Practical Tips
          </h3>

          <ul className="space-y-4">

            {roadmap.practical_tips?.map((tip, index) => (

              <li
                key={index}
                className="flex gap-3 text-gray-600"
              >

                <span className="text-blue-600 font-bold">
                  ✓
                </span>

                <span>
                  {tip}
                </span>

              </li>

            ))}

          </ul>

        </div>


        {/* Weekly Study Plan */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📅 Weekly Study Plan
          </h3>

          {roadmap.weekly_study_plan && (

            <div className="space-y-6">

              {Object.entries(roadmap.weekly_study_plan).map(
                ([key, value]) => (

                  <div
                    key={key}
                    className="border border-gray-200 rounded-2xl p-6"
                  >

                    <h4 className="font-bold text-lg text-blue-600 capitalize mb-3">
                      {key.replaceAll("_", " ")}
                    </h4>

                    {typeof value === "object" ? (
                      <div className="space-y-2 text-gray-600">

                        {Object.entries(value).map(
                          ([subKey, subValue]) => (

                            <div key={subKey}>

                              <span className="font-semibold capitalize">
                                {subKey.replaceAll("_", " ")}:
                              </span>{" "}

                              {Array.isArray(subValue)
                                ? subValue.join(", ")
                                : String(subValue)}

                            </div>

                          )
                        )}

                      </div>
                    ) : (
                      <p className="text-gray-600">
                        {String(value)}
                      </p>
                    )}

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default Roadmap;