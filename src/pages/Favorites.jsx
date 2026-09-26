import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  const favoritesCourses = courses.filter((course) => favorites.includes(course.id));
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-500 p-8">
      <h1 className="text-center text-3xl text-gray-900 dark:text-gray-300 font-bold mb-8 mt-10 md:mt-15">My Favorite Courses</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {favoritesCourses.map((course) => (
          <CourseCard 
            key={course.id}
            course={course}
          />  
        ))}
      </div>
    </div>
  );
}

export default Favorites;