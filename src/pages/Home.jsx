import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Bell, ChartNoAxesColumnIncreasing, Search } from "lucide-react";
// import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        const levels = ["Beginner", "Intermediate", "Advanced"];
        const categories = ["Programming", "Engineering", "Technology"];
          const formattedCourses = data.map((item) => {
            return {
              id: item.id,
              title: item.title,
              description: item.body,
              level: levels[item.id % 3],
              category: categories[item.id % 3],
              image: `https://picsum.photos/seed/${item.id}/500/300`,
            };
          });

        setCourses(formattedCourses);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = 
    courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLevel = 
        selectedLevel === "All" ||
        course.level === selectedLevel;

        return matchesSearch && matchesLevel;
    });

  

  return (
    <div className="bg-gray-100">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-400 dark:bg-gray-950 transition-colors duration-300">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white transition-colors duration-300">Learn Smarter, <span className="text-blue-700 dark:text-green-200 transition-colors duration-300">Build Your Future</span></h1>
        <p className="text-black dark:text-gray-500 transition-colors duration-300 mt-6 text-lg md:text-xl max-w-2xl">Join thousands of students learning programming, engineering and technology through TechCatalyst.</p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-black transition-all duration-300 px-8 py-3 rounded-lg font-bold">Get Started</button>
          <Link to="/courses" className="border border-white text-black dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-xl px-8 py-3 rounded-lg">Explore Courses</Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100 dark:bg-gray-500 transition-colors duration-300">
        <h2 className="text-black dark:text-white text-4xl font-bold text-center transition-colors duration-300">Featured Courses</h2>
        <div className="relative flex items-start justify-center flex-col md:flex-row gap-1 md:gap-5 px-7 mt-4">
          <Search 
            size={20} 
            className="absolute left-12 top-1/7 mt-0 sm:top-1/4 md:top-1/3 md:mt-4 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 p-3 pl-13 rounded-lg w-full md:w-96 outline-0 flex-1"
          />
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white transition-colors duration-300 p-3 rounded-lg outline-0"
          >
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        {/* Show loading only inside the courses section */}
        {loading && (
          <p className="text-center text-gray-500 py-10">
            Loading courses...
          </p>
        )}
        {/* Show API errors only inside the courses section */}
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 mb-2">
            Unable to load courses.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Please check your internet connection and try again.
          </p>
          </div>
        )}
        {/* Show the courses only when loading has finished and there is no error */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8 mt-8 px-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.slice(0, 15).map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No courses found.</p>
          )}
        </div>
        )}
      </section>

      {/* Why Student Portal section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

        {/* Section heading */}
        <div className="text-center mb-12">

          {/* Main section title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Use TechCatalyst?
          </h2>

          {/* Short explanation */}
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Everything you need to manage your student activities in one simple platform.
          </p>
        </div>

        {/* Feature cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Course feature */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Lucide icon for courses */}
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-blue-600" />

            {/* Feature title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Manage Courses
            </h3>

            {/* Feature description */}
            <p className="text-gray-600 dark:text-gray-400">
              Browse and explore your available courses easily.
            </p>
          </div>

          {/* Learning feature */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Lucide icon for learning */}
            <GraduationCap className="w-10 h-10 mx-auto mb-4 text-blue-600" />

            {/* Feature title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Student Learning
            </h3>

            {/* Feature description */}
            <p className="text-gray-600 dark:text-gray-400">
              Keep your learning activities organized in one place.
            </p>
          </div>

          {/* Notifications feature */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Lucide icon forr notifications */}
            <Bell className="w-10 h-10 mx-auto mb-4 text-blue-600" />

            {/* Feature title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Notifications
            </h3>

            {/* Feature description */}
            <p className="text-gray-600 dark:text-gray-400">
              Stay informed about important student updates.
            </p>
          </div>

          {/* Result feature */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Lucide icon for results */}
            <ChartNoAxesColumnIncreasing className="w-10 h-10 mx-auto mb-4 text-blue-600" />

            {/* Feature title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Track Results
            </h3>

            {/* Feature description */}
            <p className="text-gray-600 dark:text-gray-400">
              Keep track of your academic performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;