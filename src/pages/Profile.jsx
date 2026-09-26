import { User, Mail, Phone, GraduationCap, Hash, BookOpen, Edit } from "lucide-react";

const Profile = () => {
  return (
    // Main page container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* Profile hero section */}
      <section className="bg-blue-600 text-white px-6 py-14 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Profile icon */}
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
            <User size={40} />
          </div>

          {/* Student name */}
          <h1 className="text-3xl md:text-4xl font-bold">
            Student Profile
          </h1>
          {/* Short description */}
          <p className="text-blue-100 mt-2">
            Manage your student information and account details.
          </p>
        </div>
      </section>

      {/* Main profile content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Profile information card */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-8">
          {/* Card heading */}
          <div className="flex items-center justify-between mb-8">
            {/* Heading and icon */}
            <div className="flex items-center gap-3">
              <User className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Personal Information
              </h2>
            </div>

            {/* Edit button */}
            <button 
              type="button"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {/* Edit icon */}
              <Edit size={18} />

              {/* Button text */}
              Edit
            </button>
          </div>

          {/* Information grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full name */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <User className="text-blue-600 mt-1" size={22} />
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full Name
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Student Name
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Mail className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  student@example.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Phone className="text-blue-600" size={22} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  +2348000000000
                </p>
              </div>
            </div>

            {/* Student ID */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Hash className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Student ID
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  STU2026001
                </p>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <GraduationCap className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Department
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Aeronautical & Aerospace Engineering
                </p>
              </div>
            </div>

            {/* Level */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <BookOpen className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Level
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  100 Level
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Account status card */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:p-8 mt-8">
          {/* Section heading */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Account Status
          </h2>
          {/* Status message */}
          <div className="flex items-center gap-3">
            {/* Green status indicator */}
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            {/* Status text */}
            <p className="text-gray-700 dark:text-gray-300">Account is active</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;