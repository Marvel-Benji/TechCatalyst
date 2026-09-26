import { Bell, BookIcon, BookOpen, FileText, Heart, LayoutDashboard, Star, User } from "lucide-react";


const About = () => {
  return (
    // Main page container
    <div className="bg-gray-200 dark:bg-gray-600">
      {/* Hero Section */}
      <section className="h-screenflex flex-col items-center justify-center text-center  bg-blue-600 dark:bg-gray-900 px-6 py-16 pt-22 md:pt-26">
        {/* Main page heading */}
        <h1 className="text-4xl text-white dark:text-white md:text-5xl font-bold mb-4">About TechCatalyst</h1>

        {/* Short introduction */}
        <p className="max-w-2xl mx-auto text-white text-lg md:text-2xl dark:text-gray-400">A simple digital platform designed to help students manage their Tech activities in one place.</p>
      </section>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction card */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-10">
          {/* Section heading */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            What is TechCatalyst?
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-7">
            TechCatalyst is a learning project built with React. It demostrates how a student-focused web application can bring important academic features together in one convenient place.
          </p>
        </section>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Dashboard feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <LayoutDashboard className="w-10 h-10 text-pink-500 mb-4" />
            <h3 className="dark:text-gray-100 text-4xl font-semibold mb-2">
              Dashboard
            </h3>

            <p className="text-gray-600 dark:text-gray-200">
              Get a quick overview of your student activities and important information.
            </p>
          </div>

          {/* Courses feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <BookOpen className="w-10 h-10 text-purple-600 mb-4" />

            <h3 className="dark:text-gray-100 text-4xl font-semibold mb-2">Courses</h3>

            <p className="text-gray-600 dark:text-gray-200">
              Browse courses, search for specific courses, sort results, and explore course details.
            </p>
          </div>

          {/* Result feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <FileText className="w-10 h-10 text-green-400 mb-4" />

            <h3 className="dark:text-gray-100 text-xl font-semibold mb-2">
              Result
            </h3>

            <p className="text-gray-600 dark:text-gray-200">
              View academic results and keep track of your performance.
            </p>
          </div>

          {/* Favorites feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <Heart className="w-10 h-10 text-red-600 fill-red-600 mb-4" />

            <h3 className="dark:text-gray-100 text-xl font-semibold mb-2">
              Favorites
            </h3>

            <p className="text-gray-600 dark:text-gray-200">
              Save courses that you want to easily access later.
            </p>
          </div>

          {/* Notifications feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <Bell className="w-10 h-10 text-amber-400 fill-amber-400 mb-4" />

            <h3 className="dark:text-gray-100 text-xl font-semibold mb-2">
              Notifications
            </h3>

            <p className="text-gray-600 dark:text-gray-200">
              Keep important student announcement and notifications in one place.
            </p>
          </div>

          {/* Profile feature */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <User className="w-10 h-10 text-blue-600 fill-blue-600 mb-4" />

            <h3 className="dark:text-gray-100 text-xl font-semibold mb-2">
              Student Profile
            </h3>

            <p className="text-gray-600 dark:text-gray-200">
              Manage your student information and personal account details.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Our Goal
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-7">
            The goal of this project is to create a clean, responsive, and easy-to-use student platform while practicing modern React development.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;