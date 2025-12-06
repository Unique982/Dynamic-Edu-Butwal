import { Card } from "./ui/card";

import { BookOpen, Users, Zap, Award } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Language Courses",
    description:
      "Master English, Spanish, French, German, and more with our comprehensive curriculum designed by native speakers.",
  },
  {
    icon: Users,
    title: "Group Workshops",
    description:
      "Interactive workshops conducted by industry experts covering professional development and specialized skills.",
  },
  {
    icon: Zap,
    title: "One-on-One Coaching",
    description:
      "Personalized tutoring sessions tailored to your pace, schedule, and learning goals with certified instructors.",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description:
      "Earn recognized certifications that boost your career prospects and professional credibility in your field.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational solutions tailored to meet your unique
            learning needs and career aspirations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border hover:border-accent/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
