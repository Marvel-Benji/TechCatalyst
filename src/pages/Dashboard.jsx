import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BookOpen, FileText, Star, Bell, User, LogOut, ArrowRight, GraduationCap } from "lucide-react";

const Dashboard = () => {
  // Get the logged-in user and logout function from AuthContext
  const { user, logout } = useAuth();
  // Create the navigation function
  const navigate = useNavigate();

  // Handle logging out of the Student Portal
  const handleLogout = () => {
    // Remove the user from authentication
    logout();
    // Send the student back to the login page
    navigate("/login");
  };
  
  return (
    // Main dashboard container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Dashboard content container */}
      <main className="max-w-7xl mx-auto px-6 py-10 pt-23 md:pt-25">

        {/* Welcome section */}
        <section className="bg-blue-600 rounded-2xl p-8 text-white mb-8">

          {/* Student greeting */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Greeting text */}
            <div>
              {/* Main dashboard heading */}
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {user?.name || "Student"}! 
              </h1>
              {/* Student email */}
              <p className="text-blue-100">
                {user?.email || "Welcome to your Student Portal"}
              </p>
            </div>

            {/* Graduation icon */}
            <GraduationCap className="w-16 h-16 text-blue-200" />
          </div>
        </section>

        {/* Statistics section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Courses statistic */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Icon */}
            <BookOpen className="w-10 h-10 text-blue-600 mb-4" />

            {/* Statistic title */}
            <p className="text-gray-500 dark:text-gray-400">
              Courses
            </p>

            {/* Statistic value */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">12</h2>
          </div>

          {/* Result statistic */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Icon */}
            <FileText className="w-10 h-10 text-blue-600 mb-4" />

            {/* Statistic title */}
            <p className="text-gray-500 dark:text-gray-400">
              Results
            </p>

            {/* Statistic value */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">8</h2>
          </div>

          {/* Favorites statistic */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Icon */}
            <Star className="w-10 h-10 text-blue-600 mb-4" />

            {/* Statistic title */}
            <p className="text-gray-500 dark:text-gray-400">
              Favorites
            </p>

            {/* Statistic value */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">5</h2>
          </div>

          {/* Notifications statistic */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Icon */}
            <Bell className="w-10 h-10 text-blue-600 mb-4" />

            {/* Statistic title */}
            <p className="text-gray-500 dark:text-gray-400">
              Notifications
            </p>

            {/* Statistic value */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">3</h2>
          </div>
        </section>

        {/* Dashboard lower sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Quick actions */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Section heading */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h2>

            {/* Courses action */}
            <button
              onClick={() => navigate("/courses")}
              className="w-full flex items-center justify-between p-4 mb-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300" 
            >
              {/* Action information */}
              <div className="flex items-center gap-4">

                {/* Course icon */}
                <BookOpen className="w-6 h-6 text-blue-600" />

                {/* Action text */}
                <span className="font-medium text-gray-900 dark:text-white">
                  Browse Courses
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>

            {/* Favorites action */}
            <button
              onClick={() => navigate("/favorites")}
              className="w-full flex items-center justify-between p-4 mb-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300" 
            >
              {/* Action information */}
              <div className="flex items-center gap-4">

                {/* Favorite icon */}
                <Star className="w-6 h-6 text-yellow-500" />

                {/* Action text */}
                <span className="font-medium text-gray-900 dark:text-white">
                  View Favorites
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>

            {/* Profile action */}
            <button
              onClick={() => navigate("/profile")}
              className="w-full flex items-center justify-between p-4 mb-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300" 
            >
              {/* Action information */}
              <div className="flex items-center gap-4">

                {/* Profile icon */}
                <User className="w-6 h-6 text-green-600" />

                {/* Action text */}
                <span className="font-medium text-gray-900 dark:text-white">
                  View Profile
                </span>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>
          </section>

          {/* Recent acitivity */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">

            {/* Section heading */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>

            {/* Activity item */}
          <div className="flex items-start gap-4 pb-5 mb-5 border-b border-gray-200 dark:border-gray-700">

            {/* Activity icon */}
            <BookOpen className="w-6 h-6 text-blue-600 mt-1" />

            {/* Activity information */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Course explored
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                You explored a course recently.
              </p>
            </div>
          </div>

            {/* Activity item */}
          <div className="flex items-start gap-4 pb-5 mb-5 border-b border-gray-200 dark:border-gray-700">

            {/* Activity icon */}
            <Star className="w-6 h-6 text-yellow-500 mt-1" />

            {/* Activity information */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Course added to favorites
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                A course was added to your favorites.
              </p>
            </div>
          </div>

          {/* Acitivity item */}
          <div className="flex items-start gap-4">

            {/* Activity icon */}
            <Bell className="w-6 h-6 text-purple-600 mt-1" />

            {/* Activity information */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                New notification
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                You have a new student notification.
              </p>
            </div>
          </div>
          </section>
        </div>

        {/* Logout button */}
        <div className="mt-8 flex justify-end">

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors duration-300"
          >
            {/* Logout icon */}
            <LogOut className="w-5 h-5" />

            {/* Logout text */}
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;