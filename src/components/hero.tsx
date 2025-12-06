import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-20 pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              ✨ Since 1998 🎓 Rated #1 in Language Learning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Journey
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover world-class courses, workshops, and language programs
              designed to elevate your skills and career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Get Started{" "}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary"
              >
                <Play size={20} className="mr-2" /> Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/download2.jpg"
                  alt="Learning environment"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
