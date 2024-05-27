import React from "react";
import Link from "next/link";

export const whyChooseUsContent = [
  {
    title: "Expert Instructors",
    description: "Learn from industry experts who bring real-world experience to the classroom.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Meet our Instructors
      </div>
    ),},
  {
    title: "Comprehensive Curriculum",
    description: "Our courses cover all the essential topics and the latest trends in technology.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
       View Curriculum
      </div>
    ),},
  {
    title: "Flexible Learning",
    description: "Access course materials anytime, anywhere, and learn at your own pace.",
    content: <Link href="/learning-options" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    Learn More</Link>,
  },
  {
    title: "Career Support",
    description: "Get guidance and support to advance your career with our dedicated career services.",
    content: <Link href="/career-support" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    Explore Career Services</Link>,
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing and flexible payment options to fit your budget.",
    content: <Link href="/pricing" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    Check Pricing</Link>,
  },
  {
    title: "Community Engagement",
    description: "Join a vibrant community of learners and professionals for networking and collaboration.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Join the community
      </div>
    ),
  },
];
export default whyChooseUsContent