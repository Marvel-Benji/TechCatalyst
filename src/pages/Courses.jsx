// Import the component that contains our course
// fetching, searching, sorting, and pagination logic
import AsyncPractice from '../components/AsyncPractice';
// Import a Lucide icon for the page header
import { BookOpen } from "lucide-react";

const Courses = () => {
  return (
    // Main Courses page
    <div className='min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300'>
      {/* Courses page hero/header */}
      <section className='bg-blue-600 text-white px-6 py-12 pt-24 md:pt-27'>
        <div className='max-w-7xl mx-auto'>
          {/* Page title whith icon */}
          <div className='flex items-center gap-3'>
            {/* Book icon represents courses */}
            <BookOpen className='w-9 h-9' />
            {/* Main heading */}
            <h1 className='text-3xl md:text-4xl font-bold'>
              Courses
            </h1>
          </div>

          {/* Page introduction */}
          <p className='mt-3 max-w-2xl text-blue-100'>
            Explore available courses, search for what you need, sort your courses, and browse through the available pages.
          </p>
        </div>
      </section>

      {/* Main courses content */}
      <main className='max-w-7xl mx-auto px-6 py-10'>
        {/* Course section container */}
        <section className='bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-8'>
          {/* section heading */}
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Available Courses
            </h2>
            <p className='text-gray-500 dark:text-gray-400 mt-1'>
              Find and explore courses available in the portal.
            </p>
          </div>

          {/* Keep all our existing course functionality */}
          <AsyncPractice />
        </section>
      </main>
    </div>
  );
}

export default Courses;