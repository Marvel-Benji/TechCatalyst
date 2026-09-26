// Import the Link component for navigation
import { Link } from "react-router-dom";
import { CircleAlert, Home } from "lucide-react";

const NotFound = () => {
  return (
    // Main 404 page container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center px-6">
      {/* 404 content card */}
      <div className="text-center max-w-lg">
        {/* Warning icon */}
        <div className="flex justify-center mb-6">
          <CircleAlert className="w-20 h-20 text-blue-600" />
        </div>
        {/* 404 number */}
        <h1 className="text-7xl md:text-8xl font-bold text-blue-600">
          404
        </h1>
        {/* Main message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h2>
        {/* Explanation */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 leading-7">
          Sorry, the page you are looking for does not exist or may have been moved.
        </p>

        {/* Return home button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
        >
          {/* Home icon */}
          <Home className="w-5 h-5" />
          {/* Button text */}
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;