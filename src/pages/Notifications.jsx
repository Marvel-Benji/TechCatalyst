import { Megaphone, BookOpen, TriangleAlert, GraduationCap } from "lucide-react";


const Notifications = () => {
  return (
    // Main page container
    <div className="min-h-screen bg-gray-100 pt-22 dark:bg-gray-950 transition-colors duration-300">
      {/* Page header */}
      <section className="max-w-7xl mx-auto rounded-2xl bg-blue-600 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page title */}
          <h1 className="text-3xl md:text-4xl font-bold">Notifications</h1>
          {/* Short description */}
          <p className="mt-2 text-blue-100">Stay updated with important student announcements.</p>
        </div>
      </section>

      {/* Notifications content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Notification list */}
        <div className="space-y-4">
          {/* Notification 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
            {/* Notification icon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Megaphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                {/* Notification title */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Course Registration
                </h2>
                {/* Notification message */}
                <p className="text-gray-600 dark:text-gray-300 mt-1">Course registration for the new semester is now available.</p>
                {/* Notification date */}
                <p className="text-sm text-gray-400 mt-3">Today</p>
              </div>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            {/* Notification icon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                {/* Notification title */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  New Course Available
                </h2>
                {/* Notification message */}
                <p className="text-gray-600 dark:text-gray-300 mt-1">A new course has been added to the course catalogue.</p>
                {/* Notification date */}
                <p className="text-sm text-gray-400 mt-3">Yesterday</p>
              </div>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            {/* Notification icon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <TriangleAlert className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                {/* Notification title */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Examination Reminder
                </h2>
                {/* Notification message */}
                <p className="text-gray-600 dark:text-gray-300 mt-1">Remember to check your examination schedule before the exam period.</p>
                {/* Notification date */}
                <p className="text-sm text-gray-400 mt-3">2 days ago</p>
              </div>
            </div>
          </div>

          {/* Notification 4 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            {/* Notification icon */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                {/* Notification title */}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Academic Results
                </h2>
                {/* Notification message */}
                <p className="text-gray-600 dark:text-gray-300 mt-1">Your academic results have been updated.</p>
                {/* Notification date */}
                <p className="text-sm text-gray-400 mt-3">3 days ago</p>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Notifications;