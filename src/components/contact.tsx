"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" id="contact">
      {/* Header */}
      <div className="pt-16 pb-12 text-center px-4">
        <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
          Contact Us
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Visit Us Today
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover quality guidance and learning opportunities in a supportive
          environment.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info Card */}
          <Card className="space-y-6">
            <CardHeader>
              <CardTitle>Prefer a Direct Approach?</CardTitle>
              <CardDescription>
                Reach out to us directly using the contact info below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+82-8234-5678-8901" },
                { icon: Mail, label: "Email", value: "contact@landingday.com" },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Monday to Friday, 9 AM - 6 PM (GMT)",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="block font-semibold text-gray-900">
                      {item.label}
                    </span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                </div>
              ))}

              {/* Location */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">
                    Visit Our Office
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  123 SaaS Street, Innovation City, Techland 567890
                </p>
                <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d85.3240!3d27.706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900abcdef%3A0xabcdef1234567890!2sYour%20Office%20Name!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <button className="mt-4 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Get a Direction <span>→</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Right - Contact Form Card */}
          <Card className="w-full lg:max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we will get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="98********"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
