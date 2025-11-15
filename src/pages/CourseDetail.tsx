import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, Clock, Users, Play, CheckCircle } from "lucide-react";

const courseData = {
  id: "1",
  title: "Complete Web Development Bootcamp",
  instructor: "Angela Yu",
  thumbnail:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
  rating: 4.8,
  students: 45230,
  duration: "42h",
  level: "Beginner",
  price: "Free",
  description:
    "Become a full-stack web developer with just one course. HTML, CSS, JavaScript, Node, React, MongoDB and more!",
  whatYouLearn: [
    "Build websites and web applications",
    "Build fully-fledged websites and web apps",
    "Create responsive websites",
    "Master frontend and backend development",
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: [
        {
          id: 1,
          title: "Welcome to the Course",
          duration: "5:30",
          locked: false,
        },
        { id: 2, title: "How the Web Works", duration: "10:45", locked: false },
        {
          id: 3,
          title: "Setting Up Your Environment",
          duration: "8:20",
          locked: false,
        },
      ],
    },
    {
      title: "HTML Fundamentals",
      lessons: [
        { id: 4, title: "HTML Basics", duration: "12:15", locked: false },
        { id: 5, title: "HTML Forms", duration: "15:30", locked: false },
        { id: 6, title: "Semantic HTML", duration: "9:45", locked: false },
      ],
    },
    {
      title: "CSS Mastery",
      lessons: [
        { id: 7, title: "CSS Selectors", duration: "11:20", locked: false },
        { id: 8, title: "Flexbox and Grid", duration: "18:40", locked: false },
        { id: 9, title: "Responsive Design", duration: "14:25", locked: false },
      ],
    },
  ],
};

export default function CourseDetail() {
  const { id } = useParams();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">{courseData.level}</Badge>
              <h1 className="font-heading text-4xl font-bold mb-4">
                {courseData.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {courseData.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold">{courseData.rating}</span>
                  <span className="text-muted-foreground">
                    ({courseData.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{courseData.duration} total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>By {courseData.instructor}</span>
                </div>
              </div>
              <Link to={`/course/${id}/watch/1`}>
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Start Learning
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={courseData.thumbnail}
                alt={courseData.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <Card className="p-6">
              <h2 className="font-heading text-2xl font-bold mb-4">
                What you'll learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Content */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                Course Content
              </h2>
              <div className="space-y-2">
                {courseData.curriculum.map((section, sectionIndex) => (
                  <Card key={sectionIndex} className="overflow-hidden">
                    <div className="p-4 bg-muted/50 font-semibold">
                      {section.title}
                    </div>
                    <div className="divide-y">
                      {section.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          to={`/course/${id}/watch/${lesson.id}`}
                          className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Play className="h-4 w-4 text-primary" />
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {lesson.duration}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">
                  {courseData.price}
                </div>
                {courseData.price === "Free" && (
                  <Badge variant="secondary">100% Free</Badge>
                )}
              </div>
              <Link to={`/course/${id}/watch/1`}>
                <Button className="w-full mb-4" size="lg">
                  Enroll Now
                </Button>
              </Link>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Students</span>
                  <span className="font-medium">
                    {courseData.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{courseData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-medium">{courseData.level}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <RegisterModal
        open={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </div>
  );
}
