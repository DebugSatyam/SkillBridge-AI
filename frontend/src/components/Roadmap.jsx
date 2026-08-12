function Roadmap({ roadmap }) {
  if (!roadmap) {
    return null;
  }

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ AI Generated
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Personalized Roadmap
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            {roadmap.summary}
          </p>

        </div>


        {/* Learning Stages */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            📚 Learning Roadmap
          </h3>

          <div className="space-y-6">

            {roadmap.learning_stages?.map((stage, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6"
              >

                <div className="flex items-center gap-4 mb-4">

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900">
                    {stage.stage || stage.title || `Stage ${index + 1}`}
                  </h4>

                </div>

                <div className="text-gray-600">

                  {Object.entries(stage).map(([key, value]) => {

                    if (
                      key === "stage" ||
                      key === "title"
                    ) {
                      return null;
                    }

                    return (
                      <div key={key} className="mb-4">

                        <p className="font-semibold text-gray-800 capitalize mb-1">
                          {key.replaceAll("_", " ")}
                        </p>

                        {Array.isArray(value) ? (

                          <ul className="list-disc list-inside space-y-1">
                            {value.map((item, i) => (
                              <li key={i}>
                                {typeof item === "object"
                                  ? JSON.stringify(item)
                                  : String(item)}
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


        {/* Projects */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            🛠️ Recommended Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {roadmap.hands_on_projects?.map((project, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >

                <div className="text-3xl mb-4">
                  🚀
                </div>

                {typeof project === "object" ? (

                  Object.entries(project).map(([key, value]) => (

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

                  ))

                ) : (

                  <p className="text-gray-700">
                    {String(project)}
                  </p>

                )}

              </div>

            ))}

          </div>

        </div>


        {/* Resources */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            📖 Learning Resources
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            {roadmap.learning_resources?.map((resource, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-5"
              >

                {typeof resource === "object" ? (

                  Object.entries(resource).map(([key, value]) => (

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

                  ))

                ) : (

                  <p className="text-gray-700">
                    {String(resource)}
                  </p>

                )}

              </div>

            ))}

          </div>

        </div>


        {/* Skill Gaps */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 Important Skill Gaps
          </h3>

          <div className="flex flex-wrap gap-3">

            {roadmap.important_skill_gaps?.map((skill, index) => (

              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium"
              >
                {typeof skill === "object"
                  ? JSON.stringify(skill)
                  : String(skill)}
              </span>

            ))}

          </div>

        </div>


        {/* Practical Tips */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Practical Tips
          </h3>

          <div className="space-y-4">

            {roadmap.practical_tips?.map((tip, index) => (

              <div
                key={index}
                className="flex gap-3 text-gray-600"
              >

                <span className="text-blue-600 font-bold">
                  ✓
                </span>

                <span>
                  {typeof tip === "object"
                    ? JSON.stringify(tip)
                    : String(tip)}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Weekly Plan */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            📅 Weekly Study Plan
          </h3>

          {roadmap.weekly_study_plan && (

            <div className="space-y-5">

              {Object.entries(roadmap.weekly_study_plan).map(
                ([key, value]) => (

                  <div
                    key={key}
                    className="border border-gray-200 rounded-2xl p-6"
                  >

                    <h4 className="text-lg font-bold text-blue-600 capitalize mb-3">
                      {key.replaceAll("_", " ")}
                    </h4>

                    {typeof value === "object" ? (

                      <div className="space-y-2 text-gray-600">

                        {Object.entries(value).map(
                          ([subKey, subValue]) => (

                            <p key={subKey}>

                              <span className="font-semibold capitalize">
                                {subKey.replaceAll("_", " ")}:
                              </span>{" "}

                              {Array.isArray(subValue)
                                ? subValue.join(", ")
                                : String(subValue)}

                            </p>

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