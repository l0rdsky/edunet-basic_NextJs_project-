"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-4 rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The courses here are simply amazing! The instructors are knowledgeable and the content is very well structured. I've learned so much in such a short period.",
    name: "Alice Johnson",
    title: "Computer Science Student",
  },
  {
    quote:
      "I've taken multiple courses on this platform and each one has exceeded my expectations. The interactive assignments and real-world projects helped me apply what I learned immediately.",
    name: "Michael Smith",
    title: "Software Developer",
  },
  {
    quote:
      "This platform offers the best online courses I've ever come across. The support from the community and the mentors is unparalleled. Highly recommend to anyone looking to upskill.",
    name: "Samantha Lee",
    title: "Data Analyst",
  },
  {
    quote:
      "Thanks to the courses I took here, I was able to land my dream job. The practical skills and knowledge I gained were instrumental in my job search.",
    name: "John Doe",
    title: "UX Designer",
  },
  {
    quote:
      "The flexibility of the courses allowed me to learn at my own pace. The video lectures, reading materials, and quizzes were all very engaging and informative.",
    name: "Emily Davis",
    title: "Marketing Specialist",
  },
  {
    quote:
      "I highly appreciate the detailed feedback from instructors on assignments and projects. It really helped me understand the concepts better and improve my skills.",
    name: "David Brown",
    title: "Web Developer",
  },
  {
    quote:
      "The course content is up-to-date with the latest industry trends. The learning experience was immersive and I feel much more confident in my abilities now.",
    name: "Laura Wilson",
    title: "Machine Learning Engineer",
  },
  {
    quote:
      "The platform is very user-friendly and the courses are very well-organized. I loved the hands-on projects which provided a great learning experience.",
    name: "James Anderson",
    title: "Cybersecurity Expert",
  },
  {
    quote:
      "I was able to balance my job and learning thanks to the self-paced courses. The bite-sized lessons made it easy to fit learning into my busy schedule.",
    name: "Maria Garcia",
    title: "Project Manager",
  },
  {
    quote:
      "The community aspect of this platform is fantastic. Being able to connect with fellow learners and professionals made the learning experience even more enriching.",
    name: "Robert Martinez",
    title: "Cloud Engineer",
  },
];
