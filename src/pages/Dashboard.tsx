import { Navbar } from "../components/Navbar";
import { CourseCard } from "../components/CourseCard";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";

const continueLearning = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    rating: 4.8,
    students: 45230,
    duration: "42h",
    level: "Beginner",
    price: "Free",
  },
  {
    id: "4",
    title: "Python Programming Complete Course",
    instructor: "Jose Portilla",
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    rating: 4.9,
    students: 52000,
    duration: "48h",
    level: "All Levels",
    price: "$39",
  },
];

const stats = [
  {
    icon: BookOpen,
    label: "Enrolled Courses",
    value: "5",
    color: "text-primary",
  },
  { icon: Clock, label: "Hours Learned", value: "42", color: "text-secondary" },
  { icon: Award, label: "Certificates", value: "2", color: "text-accent" },
  {
    icon: TrendingUp,
    label: "Course Progress",
    value: "68%",
    color: "text-primary",
  },
];

export default function Dashboard() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="hero-gradient text-white rounded-xl p-8 mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Welcome back, Student! 👋
          </h1>
          <p className="text-lg text-white/90">
            Continue your learning journey where you left off
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Continue Learning */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-2xl font-bold">
              Continue Learning
            </h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continueLearning.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-2xl font-bold">
              Recommended For You
            </h2>
            <Button variant="outline">Explore More</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continueLearning.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
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
