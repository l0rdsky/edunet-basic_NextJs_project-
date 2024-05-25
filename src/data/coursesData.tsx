import Link from "next/link";
import React from "react";

export interface Course {
  title: string;
  description: string;
  link: React.ReactNode;
}

const courses: Course[] = [
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks to build stunning web interfaces.",
    link: <Link href="https://frontendcourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
  {
    title: "Backend Development",
    description: "Master server-side programming with Node.js, Express, databases, and more.",
    link: <Link href="https://backendcourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
  {
    title: "Cloud Computing",
    description: "Gain expertise in AWS, Azure, and Google Cloud to build and manage cloud-based applications.",
    link: <Link href="https://cloudcourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
  {
    title: "Kubernetes",
    description: "Learn container orchestration with Kubernetes and manage your microservices.",
    link: <Link href="https://kubernetescourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
  {
    title: "Data Science",
    description: "Dive into data analysis, machine learning, and AI with Python and R.",
    link: <Link href="https://datasciencecourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and networks from cyber threats with in-depth security training.",
    link: <Link href="https://cybersecuritycourse.com" className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400">Learn More</Link>,
  },
];

export default courses;
