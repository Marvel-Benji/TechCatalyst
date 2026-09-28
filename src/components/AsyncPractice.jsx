import { useEffect, useState } from "react";
// Import the reusable component that will display each course
import CourseItem from "./CourseItem";
import Pagination from "./Pagination";
import { Search } from "lucide-react";

const AsyncPractice = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // Store the text the user types into the search box
  const [searchTerm, setSearchTerm] = useState("");
  // Stores the sorting option selected by the user
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;
  // Make sure the current page is always at least page 1
  const safeCurrentPage = Math.max(currentPage, 1);
  // Calculate the index where the current page should start
  const startIndex = (safeCurrentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  // Filter courses based on whether their title contains the search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Create a sorted copy of the filtered courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    // Sort alphabetically from A to Z
    if (sortOption === "az") {
      return a.title.localeCompare(b.title);
    }

    // Sort alphabetically from Z to A
    if (sortOption === "za") {
      return b.title.localeCompare(a.title);
    }

    // Put courses with higher IDs first 
    // We are using the ID as a simple "newest" example
    if (sortOption === "newest") {
      return b.id - a.id;
    }

    // Put courses with lower IDs first 
    // We are using the IDs as a simple "oldest" example
    if (sortOption === "oldest") {
      return a.id - b.id;
    }

    // Keep the original order when no sorting option is selected
    return 0;
  });
  // Calculate the total number of pages needed
  // Math.ceil() rounds up when the total isn't perfectly divisible by 5
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);

  // Reset pagination whenever the search term changes
  useEffect(() => {
    // Start from page 1 whenever the user changes the search
    setCurrentPage(1);
  }, [searchTerm, sortOption]);

  // Make sure the current page never goes beyond the available pages
  useEffect(() => {
    // If the current page is greater than the total pages.
    //move the user back to the last available page
    if (currentPage > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setIsLoading(true);

        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();

        setCourses(data);
      } catch (error) {
        setError("Failed to fetch courses", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-start gap-1 md:gap-5">
        <Search 
          size={20} 
          className="absolute left-5 md:left-5 md:top-1/17 mt-5 md:mt-4 -translate-y-1/2 text-gray-400"
        />
        {/* Search box for filtering courses */}
        <input
          type="text"
          placeholder="Search courses..."
          // Update searchTerm whenever the user types
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

          // Tailwind CSS styling
          className="border border-gray-300 bg-black/10 flex-1 rounded-lg px-4 py-2 pl-13 mb-4 w-full outline-0 dark:placeholder:text-gray-400"
        />

        {/* Dropdown that lets the user choose how courses should be sorted */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-400 bg-black/10 text-gray-700 dark:text-gray-400 outline-none rounded-lg px-4 py-2 mb-4"
        >
          {/* Keep the original API order */}
          <option value="default">Default order</option>
          {/* Sort course titles from A to Z */}
          <option value="az">A --- Z</option>
          {/* Sort course titles from Z to A */}
          <option value="za">Z --- A</option>
          {/* Put the highest course IDs first */}
          <option value="newest">Newest</option>
          {/* Put the lowest course IDs first */}
          <option value="oldest">Oldest</option>
        </select>
      </div>
      {isLoading && <p>Loading courses...</p>}
      {error && <p className="text-red-400 text-center">{error}</p>}
      {!isLoading && !error && (
        <div>
          {/* Show a message when the search/filter returns no courses */}
          {filteredCourses.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No courses found.</p>
          ) : (
            /* Display the courses for the current page */
            sortedCourses.slice(startIndex, endIndex).map((course) => (
              // Render each course from the current page
              // Pass the current course to CourseItem through props
              <CourseItem
                key={course.id}
                course={course}
              />
            ))
          )}
        </div>
      )}
      {/* Display the reusable pagination component */}
      <Pagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage(currentPage - 1)}
        onNext={() => setCurrentPage(currentPage + 1)}
        // Update the parent's currentPage when a page number is clicked
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};

export default AsyncPractice;