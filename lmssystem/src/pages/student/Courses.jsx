import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";

const Courses = () => {
  const isLoading = false;
  //   if (isError) return <h1>Some error occurred while fetching courses.</h1>;

  const data = {
    courses: [
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

  return (
    <div className="bg-gray-50 dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : data?.courses &&
              data.courses.map((course, index) => (
                <Course key={index} course={course} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
