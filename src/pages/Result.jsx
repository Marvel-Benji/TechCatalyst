// Import a Lucide icon for the Results page
import { GraduationCap, Award } from "lucide-react";

const Result = () => {
  //Sample academic results for the Student Portal
  const results = [
    {
      code: "CSC101",
      course: "Introduction to Computer Science",
      units: 3,
      score: 78,
      grade: "A",
    },
    {
      code: "MTH101",
      course: "Elementary Mathematics",
      units: 3,
      score: 72,
      grade: "A"
    },
    {
      code: "PHY101",
      course: "Use of English",
      units: 2,
      score: 61,
      grade: "B"
    },
    {
      code: "GST101",
      course: "Communication Skills",
      units: 2,
      score: 56,
      grade: "C"
    }
  ];

  return (
    //Main Results page container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Main content container */}
      <main className="max-w-6xl mx-auto px-6 py-10 pt-23 md:pt-25">

        {/* Page heading */}
        <section className="max-w-6xl mx-auto bg-blue-600 rounded-2xl px-6 py-6 mb-8">
          {/* Heading and icon */}
          <div className="flex items-center gap-3 mb-2">
            {/* Graduation cap icon */}
            <GraduationCap className="w-9 h-9 text-white" />
            {/* Page title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Academic Results
            </h1>
          </div>

          {/* Page description */}
          <p className="text-gray-300">
            View your academic performance and course results.
          </p>
        </section>

        {/* Student information card */}
        <section className="bg-white dark:bg-gray-900 rounded -2xl shadow-sm p-6 mb-8">
          {/* Student information heading */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Student Information
          </h2>

          {/* Student information grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Student name */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Name
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Student
              </p>
            </div>

            {/* Student level */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Level
              </p>

              <p className="font-semibold text-gray-900 dark:text-white">
                100 Level
              </p>
            </div>

            {/* Academic session */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Session
              </p>

              <p className="font-semibold text-gray-900 dark:text-white">
                2025/2026
              </p>
            </div>
          </div>
        </section>

        {/* GPA summary cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {/* GPA card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
            {/* Award icon */}
            <Award className="w-9 h-9 text-yellow-500 mb-3" />
            {/* Card label */}
            <p className="text-gray-500 dark:text-gray-400">
              GPA
            </p>
            {/* Sample GPA */}
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              4.20
            </p>
          </div>

          {/* Total courses card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
            {/* Card label */}
            <p className="text-gray-500 dark:text-gray-400">
              Courses
            </p>
            {/* Number of courses */}
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {results.length}
            </p>
          </div>

          {/* Total units card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
            {/* Card label */}
            <p className="text-gary-500 dark:text-gray-400">
              Total Units
            </p>
            {/* Calculate total course units */}
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {results.reduce((total, result) => total + result.units, 0)}
            </p>
          </div>
        </section>

        {/* Results table */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden">
          {/* Table heading */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              First Semester Results
            </h2>
          </div>

          {/* Horizontal scrolling for smaller screens */}
          <div className="overflow-x-auto">
            {/* Results table */}
            <table className="w-full min-w-[700]">
              {/* Table header */}
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {/* Course code column */}
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Code
                  </th>

                  {/* Course name column */}
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Course
                  </th>

                  {/* Units column */}
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Units
                  </th>

                  {/* Score column */}
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Score
                  </th>

                  {/* Grade column */}
                  <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                    Grade
                  </th>
                </tr>
              </thead>

              {/* Table body */}
              <tbody>
                {/* Create one row for every result */}
                {results.map((result) => (
                  <tr
                    key={result.code}
                    className="boder-t border-gray-200 dark:border-gray-700"
                  >
                    {/* Course code */}
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {result.code}
                    </td>
                    {/* Course name */}
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {result.course}
                    </td>
                    {/* Course units */}
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      {result.units}
                    </td>
                    {/* Course score */}
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      {result.score}
                    </td>
                    {/* Course grade */}
                    <td className="px-6 py-4 text-center font-bold text-blue-600">
                      {result.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Result;