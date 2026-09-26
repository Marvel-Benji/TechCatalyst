

// This component receives one course through props
const CourseItem = ({ course }) => {
  return (
    // Individual course card
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      {/* course title */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 capitalize">
        {course.title}
      </h2>
      {/* course description */}
      <p className="text-gray-600 dark:text-gray-300 leading-7 mb-5">
        {course.body}
      </p>

      {/* Bottom section of the course card */}
      <div className="flex items-center justify-between gap-4">
        {/* Course identifier */}
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          Course #{course.id}
        </span>
        {/* View course button */}
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Course
        </button>
      </div>
    </article>
  );
};

export default CourseItem;