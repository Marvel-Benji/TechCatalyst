import React from 'react'
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'
import { User, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const toggleFavorite = () => {
    if (favorites.includes(course.id)) {
      setFavorites(favorites.filter((id) => id !== course.id)
    );
    } else {
      setFavorites([...favorites, course.id]);
    }
  };
  
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl p-6">
        <img 
          src={course.image}
          alt={course.title}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/600x400?text=Course+Image";
          }}
          className='w-full h-48 object-cover rounded-t-xl'
        />
          <h3 className="text-gray-900 dark:text-white transition-colors duration-300 text-3xl font-bold">{course.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 mt-4">{course.desc}</p>
          <div className='flex gap-7'>
            <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-300 transition-colors duration-300"><User className="w-5 h-5 text-blue-600 fill-blue-600" /><span>{course.students}</span></div>
            <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-400 transition-colors duration-300"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><span>{course.rating}</span></div>
          </div>
          <p className='text-sm text-gray-500'>{course.category}</p>
          <div className='flex items-center gap-5'>
            <p className='text-gray-900 dark:text-gray-400 transition-colors duration-300 text-xl mt-4'>{course.level}</p> 
            <p className='text-gray-700 dark:text-gray-300 transition-colors duration-300 mt-4'>{course.duration}</p>
          </div>
          <button
            onClick={toggleFavorite} 
            className='mt-4'
          >
            {favorites.includes(course.id)
              ? <Heart className='text-red-500 fill-red-500' />
              : <Heart className='text-gray-400' />
            }
          </button>
          <Link to={`/courses/${course.id}`} className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Learn More</Link>
        </div>
    </div>
  );
}

export default CourseCard;