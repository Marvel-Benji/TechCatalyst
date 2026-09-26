import React, { useState } from "react";
import { Settings as SettingsIcon, Moon, Bell, ShieldCheck, Save } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  // Get darkMode and setDarkMode from our existing ThemeContext
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  // Store whether email verification are enabled
  const [emailNotifications, setEmailNotifications] = useState(true);
  // Store whether announcement notifications are enabled
  const [announcements, setAnnouncements] = useState(true);

  //Handle saving the settings
  const handleSave = () => {
    //For now, settings are only handled on the frontend
    // We will connect them to persistent storage later
    alert("Settings saved successfully");
  };
  return (
    // Main Settings page container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

      {/* Page header */}
      <section className="bg-blue-600 text-white px-6 py-12 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Page title and icon */}
          <div className="flex items-center gap-3">
            <SettingsIcon className="w-9 h-9" />
            
            {/* Page heading */}
            <h1 className="text-3xl md:text-4xl font-bold">
              Settings
            </h1>
          </div>

          {/* Page description */}
          <p className="mt-2 text-blue-100">
            Manage your Student Portal preferences.
          </p>
        </div>
      </section>

      {/* Main settings content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Appearance section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 mb-6">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-6">
            {/* Moon icon */}
            <Moon className="w-6 h-6 text-blue-600" />
            {/* Section title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Appearance
            </h2>
          </div>

          {/* Dark mode setting */}
          <div className="flex items-center justify-between gap-4">
            {/* Setting description */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Change the appearance of the Student Portal.
              </p>
            </div>

            {/* Theme toggle button */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              // Change the switch background depending on the current mode
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            >
              {/* Toggle circle */}
              <span
                className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  darkMode 
                    ? "translate-x-7" // Move the circle to the right in dark mode
                    : "translate-x-0" // Keep the circle on the left in light mode
                }`}
              />
            </button>
          </div>
        </section>

        {/* Notification settings */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 mb-6">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-6">
            {/* Bell icon */}
            <Bell className="w-6 h-6 text-blue-600" />

            {/* Section title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>

          {/* Email notifications */}
          <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
            {/* Setting description */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Email Notifications
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive important updates through email.
              </p>
            </div>

            {/* Email notification checkbox */}
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => 
                // Update the email notification setting
                setEmailNotifications(e.target.checked)
              }
              className="w-5 h-5 accent-blue-600"
            />
          </div>

          {/* Announcement notifications */}
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Setting description */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Announcements
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive important school announcements.
              </p>
            </div>
            {/* Announcement checkbox */}
            <input
              type="checkbox"
              checked={announcements}
              onChange={(e) => 
                // Update the announcement setting 
                setAnnouncements(e.target.checked)
              }
              className="w-5 h-5 accent-blue-600"
            />
          </div>

          
        </section>

        {/* Security section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 mb-6">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-4">
            {/* Security icon */}
            <ShieldCheck className="w-6 h-6 text-green-600" />

            {/* Section title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Security
            </h2>
          </div>

          {/* Security information */}
          <p className="text-gray-600 dark:text-gray-400">
            Your account is protected by the Student Portal authentication system.
          </p>
        </section>

        {/* Save button */}
        <div>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            {/* Save icon */}
            <Save className="w-5 h-5" />

            {/* Button text */}
            Save Settings
          </button>
        </div>
      </main>
    </div>
  );
}

export default Settings;