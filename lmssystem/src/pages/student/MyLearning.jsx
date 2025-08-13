import React from "react";
import Course from "./Course";

const MyLearning = () => {
  //   const { data, isLoading } = useLoadUserQuery();

  const isLoading = false;

  const data = {
    enrolledCourses: [
      {
        courseTitle: "Full Stack Web Development",
        _id: "64f6b12e9a1c2f001234abcd",
        courseThumbnail: "https://example.com/images/webdev-course.jpg",
        creator: {
          photoUrl: "https://example.com/images/instructor1.jpg",
          name: "Rohit Sharma",
        },
        courseLevel: "Beginner",
        coursePrice: 2999,
      },
      {
        courseTitle: "Advanced React and Redux",
        _id: "64f6b12e9a1c2f001234abce",
        courseThumbnail: "https://example.com/images/react-course.jpg",
        creator: {
          photoUrl: "https://example.com/images/instructor2.jpg",
          name: "Ankit Verma",
        },
        courseLevel: "Advanced",
        coursePrice: 4999,
      },
      {
        courseTitle: "Python for Data Science",
        _id: "64f6b12e9a1c2f001234abcf",
        courseThumbnail: "https://example.com/images/python-course.jpg",
        creator: {
          photoUrl: "https://example.com/images/instructor3.jpg",
          name: "Priya Singh",
        },
        courseLevel: "Intermediate",
        coursePrice: 3999,
      },
      {
        courseTitle: "Python for Data Science",
        _id: "64f6b12e9a1c2f001234abcf",
        courseThumbnail: "https://example.com/images/python-course.jpg",
        creator: {
          photoUrl: "https://example.com/images/instructor3.jpg",
          name: "Priya Singh",
        },
        courseLevel: "Intermediate",
        coursePrice: 3999,
      },
      {
        courseTitle: "Python for Data Science",
        _id: "64f6b12e9a1c2f001234abcf",
        courseThumbnail: "https://example.com/images/python-course.jpg",
        creator: {
          photoUrl: "https://example.com/images/instructor3.jpg",
          name: "Priya Singh",
        },
        courseLevel: "Intermediate",
        coursePrice: 3999,
      },
    ],
  };

  const myLearning = data.enrolledCourses || [];
  return (
    <div className="max-w-4xl mx-auto my-10 px-4 md:px-0">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearning.length === 0 ? (
          <p>You are not enrolled in any course.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {myLearning.map((course, index) => (
              <Course key={index} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

// Skeleton component for loading state
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
      ></div>
    ))}
  </div>
);
