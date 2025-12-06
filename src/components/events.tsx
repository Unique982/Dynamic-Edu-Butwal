"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "German Language Immersion",
    desc: "Boost your German skills with intensive exercises in reading, writing, and conversation.",
    date: "Oct 5, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Dynamic Educational Center, Language Lab",
    img: "/english-language-learning.png",
  },
  {
    id: 2,
    title: "Japanese Culture Workshop",
    desc: "Explore Japanese language basics and cultural traditions with experts.",
    date: "Nov 12, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Global Learning Hub",
    img: "/download7.jpg",
  },
  {
    id: 3,
    title: "IELTS Masterclass",
    desc: "Get advanced tips and practice sessions to boost your IELTS score.",
    date: "Sep 20, 2025",
    time: "8:00 AM - 11:00 AM",
    location: "Bright Academy Hall 2",
    img: "/download5.jpg",
  },
  {
    id: 4,
    title: "French Speaking Booster",
    desc: "Improve your French speaking fluency with guided conversations.",
    date: "Dec 1, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Language Hub Center",
    img: "/download4.jpg",
  },
  {
    id: 5,
    title: "Korean Hangul Basics",
    desc: "Learn the basics of Hangul writing and reading techniques.",
    date: "Jan 8, 2026",
    time: "1:00 PM - 3:00 PM",
    location: "Dynamic Hall 1",
    img: "/download2.jpg",
  },
  {
    id: 6,
    title: "Public Speaking Workshop",
    desc: "Boost your confidence and speaking clarity with expert trainers.",
    date: "Feb 22, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Smart Learning Center",
    img: "/download7.jpg",
  },
];

export default function EventCards() {
  return (
    <section id="events" className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Our Evernts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshops & Events
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
            >
              <div className="w-full h-48 relative rounded-xl overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{event.desc}</p>

                <div className="flex items-center gap-2 mt-4 text-sm text-gray-700">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                  <Clock size={16} className="ml-2" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

