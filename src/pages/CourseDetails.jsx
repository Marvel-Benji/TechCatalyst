import { useParams } from "react-router-dom";
import courses from "../data/courses";
import { User, Star } from "lucide-react";

const CourseDetails = () => {

  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));
  
  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-500">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 shadow-xl rounded-xl p-8 md:px-25 text-center">
        <h1 className="text-3xl text-gray-900 dark:text-gray-100 font-bold">{course.title}</h1>
        <p className="mt-6 text-gray-800 dark:text-gray-300 text-xl">{course.desc}</p>
        <div className='flex flex-col items-center justify-center gap-1'>
                <div className='flex items-center gap-2 mt-4'>
                  <User className="w-7 h-7 text-blue-600 fill-blue-600" />
                  <span className="text-xl dark:text-gray-400">{course.students}</span>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                  <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl dark:text-gray-400">{course.rating}</span>
                </div>
              </div>
        {/* <p className="mt-4">{course.students}</p>
        <p className="mt-4">{course.rating}</p> */}
        <p className='text-gray-700 dark:text-gray-200 text-2xl mt-4'>{course.level}</p>
        <p className='text-gray-700 text-xl mt-4'>{course.duration}</p>
        <button className="mt-3 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">Enroll Now</button>
      </div>
    </div>
  );
}

export default CourseDetails;