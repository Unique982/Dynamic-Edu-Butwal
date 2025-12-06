import { Check } from "lucide-react";

export default function About() {
  const features = [
    "Expert instructors with industry experience",
    "Interactive and engaging learning environment",
    "Flexible scheduling for working professionals",
    "Comprehensive course materials and resources",
    "Career support and job placement assistance",
    "Global community of learners",
  ];

  return (
    <section id="about" className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <img
              src="/download.jpg"
              alt="About us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Learners{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Worldwide
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dynamic Educational Center is a leading educational institution
              offering language learning programs in Korean, German, Japanese,
              and English alongside computer classes and tuition services. Our
              mission is to provide personalized and innovative learning
              experiences for all students.
            </p>

            <div className="space-y-6 auto-show">
              <div className="flex items-start space-x-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award h-8 w-8 mt-1 text-amber-600"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Excellence in Education
                  </h3>
                  <p className="text-gray-600">
                    We provide top-quality language programs and computer
                    courses designed for learners of all levels.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open h-8 w-8 mt-1 text-amber-600"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Personalized Learning
                  </h3>
                  <p className="text-gray-600">
                    Our experienced instructors provide individual attention and
                    innovative teaching methods for rapid progress.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-8 w-8 mt-1 text-amber-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Community and Support
                  </h3>
                  <p className="text-gray-600">
                    Beyond classes, we support students through expert guidance
                    across subjects, fostering a dynamic learning environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
