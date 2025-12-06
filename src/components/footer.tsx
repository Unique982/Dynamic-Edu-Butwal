import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                alt="Dynamic Education Logo"
                className="h-12 w-12 rounded-full border-2 border-amber-400 object-cover transition-transform duration-300 hover:scale-110"
                src="https://dynamicedubutwal.com/assets/logo-CYKKx8Gz.jpg"
              />
              <span className="text-xl font-bold">
                Dynamic Education Center
              </span>
            </div>

            <p className="text-sm leading-6 text-black/80">
              Dynamic Education Center — providing quality education, training,
              and career development programs in Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Events"].map((link) => (
                <li key={link} className="flex items-center gap-2">
                  <span className="text-accent font-bold">›</span>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-black/70 hover:text-black font-medium transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Other Links</h4>
            <ul className="space-y-3 text-sm">
              {["Special", "Gallery", "Testimonial", "Contact"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-accent font-bold">›</span>
                  <a href="#" className={`${item === "Contact"} transition`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Subscribe to Newsletter
            </h4>
            <p className="text-sm text-black/70 mb-4">
              Get updates on courses, events & promotions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent bg-white text-black"
              />
              <button className="px-6 py-2 bg-accent text-white font-medium rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-black/10 pt-6 text-center text-sm text-black/70">
          © {currentYear} Dynamic Education Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
