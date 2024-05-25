import { HoverEffect } from "./ui/card-hover-effect";
import courses from "@/data/coursesData"
export default function CardHover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={courses} />
    </div>
  );
}
