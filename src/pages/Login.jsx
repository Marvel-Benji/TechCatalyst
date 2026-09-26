// React hook for storing form values and UI state
import { useState } from "react";
// React Router hooks for navigation and reading the previous location
import { useNavigate, useLocation, Link } from "react-router-dom";
// Custom Authentication hook from our AuthContext
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, GraduationCapIcon } from "lucide-react";

const Login = () => {
  // Get the login our authentication context
  const { login } = useAuth();
  // Allows us to redirect the user after login
  const navigate = useNavigate();
  // Allows us to know which page the user came from
  const location = useLocation();
  
  // Send the user back to the page they originally wanted
  const from = location.state?.from?.pathname || "/dashboard";

  // Store the email entered by the student
  const [email, setEmail] = useState("");
  // Store the password entered by the student
  const [password, setPassword] = useState("");
  // Stores whether the password should be visible
  const [showPassword, setShowPassword] = useState(false);
  // Store validation or login errors
  const [error, setError] = useState("");
  // Track whether the login process is running
  const [isLoading, setIsLoading] = useState(false);

  // const getCourses = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //     const data = await response.json();

  //     console.log(data);
  //   } catch (error) {
  //     console.log("Failed to fetch courses");
  //   }
  // };
  // getCourses();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setIsLoading(true);

      login({
        name: "Student",
        email,
    });
    
      navigate(from, { replace: true });
    } catch (error) {
      setError("unable to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-8 pt-20">
      {/* Main login card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Portal branding */}
        <div className="text-center mb-8">
          {/* Simple graduation-cap emoji for our temporary logo */}
          <span className="flex items-center justify-center text-center"><GraduationCapIcon className="w-10 h-10 text-black dark:text-blue-500 dark:fill-blue-100 mb-3" /></span>

          {/* Portal name */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">TechCatalyst Portal</h1>
          {/* Short welcome message */}
          <p className="text-gray-500 dark:text-gray-400 mt-2">Welcome back! Sign in to continue.</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Display an error when validation fails */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm">{error}</div>
          )}

          {/* Email field */}
          <div>
            <label 
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="student@example.com"
              value={email}
              // Update the email state when the student types
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
            />
          </div>

          {/* Password field */}
          <div>
            <label 
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
            >
              Password
            </label>

            {/* Password input and visibility button */}
            <div className="relative">

              {/* Password input */}
              <input
                id="password"
                // Switch between normal text and hidden password characters
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password"
                value={password}
                // Update the password state when the student types
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500"
              />

              {/* Show or hide the password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium"
              >
                {/* Change the button text depending on the current state */}
                {showPassword ? <EyeOff size={20} className="text-gray-500" /> : <Eye size={20} className="text-gray-500" />}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition"
          >
            {/* Change the button text while logging in */}
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Return to the home page */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-500 text-sm font-medium" 
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;