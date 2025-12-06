import { Card } from "./ui/card";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Professional",
    content:
      "The English course was transformative! The instructors are incredibly knowledgeable and supportive. I've already applied what I learned to my career.",
    rating: 5,
    avatar: "/student2.jpg",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Software Engineer",
    content:
      "Exceptional learning experience! The Tech Skills Bootcamp gave me practical knowledge I immediately used in my projects. Highly recommended!",
    rating: 5,
    avatar: "/student.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Business Owner",
    content:
      "The professional development workshop helped me understand leadership better. The instructors brought real-world insights that made a huge impact.",
    rating: 5,
    avatar: "/student1.jpg",
  },
  {
    id: 4,
    name: "James Chen",
    role: "Student",
    content:
      "Fantastic platform for learning! One-on-one coaching sessions were personalized and flexible. The support team is always available to help.",
    rating: 4.8,
    avatar: "/student.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real learners who transformed their careers and
            skills with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(testimonial.rating)
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 text-sm leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
