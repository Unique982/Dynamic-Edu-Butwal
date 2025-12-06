"use client";

import Image from "next/image";
const courses = [
  {
    id: 1,
    title: "Korean Language Course",
    author: "Minji Park",
    level: "All Levels",
    duration: "60 Days",
    image: "/download6.jpg",
    price: "Rs. 799",
    description:
      "Learn Korean from the basics to advanced conversation with structured lessons and native pronunciation guidance.",
  },
  {
    id: 2,
    title: "German Language Course",
    author: "Hans Müller",
    level: "All Levels",
    duration: "60 Days",
    image: "/download9.jpg",
    price: "Rs. 899",
    description:
      "Tailored lessons in German for all proficiency levels with a strong focus on practical usage and real-world conversations.",
  },
  {
    id: 3,
    title: "Japanese Language Course",
    author: "Yuki Tanaka",
    level: "All Levels",
    duration: "70 Days",
    image: "/download8.jpg",
    price: "Rs. 999",
    description:
      "An immersive approach to mastering Japanese with experienced native instructors and interactive practice sessions.",
  },
  {
    id: 4,
    title: "English Language Course",
    author: "John Smith",
    level: "All Levels",
    duration: "45 Days",
    image: "/course-english.jpg",
    price: "Rs. 599",
    description:
      "Enhance your English speaking, writing, and listening skills with personalized lessons and expert guidance.",
  },
  {
    id: 5,
    title: "Korean Language Course",
    author: "Minji Park",
    level: "All Levels",
    duration: "60 Days",
    image: "/course-professional.jpg",
    price: "Rs. 799",
    description:
      "Learn Korean from the basics to advanced conversation with structured lessons and native pronunciation guidance.",
  },
  {
    id: 6,
    title: "German Language Course",
    author: "Hans Müller",
    level: "All Levels",
    duration: "60 Days",
    image: "/coding-technology-education.jpg",
    price: "Rs. 899",
    description:
      "Tailored lessons in German for all proficiency levels with a strong focus on practical usage and real-world conversations.",
  },
];

export default function Courses() {
  const allCourses = courses;

  return (
    <section id="courses" className="pt-8 pb-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Our Evernts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Language Courses
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Learn Korean, German, Japanese, and English with our structured
            language courses designed for all levels.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Mapping over the full courses list */}
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow gap-2">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-gray-500 text-sm">
                  {course.level} • {course.author}
                </p>

                {/* Course Description */}
                {course.description && (
                  <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                    {course.description}
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-4">
                  ⏱ {course.duration}
                </p>
                <p className="font-semibold mt-2">{course.price}</p>
                <button className="mt-auto w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
