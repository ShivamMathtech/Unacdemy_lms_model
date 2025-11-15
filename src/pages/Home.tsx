import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { CourseCard } from "../components/CourseCard";
import { Button } from "../components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCourses = [
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
    id: "2",
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    thumbnail:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=450&fit=crop",
    rating: 4.9,
    students: 32100,
    duration: "38h",
    level: "Intermediate",
    price: "$49",
  },
  {
    id: "3",
    title: "Digital Marketing Masterclass",
    instructor: "Phil Ebiner",
    thumbnail:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=450&fit=crop",
    rating: 4.7,
    students: 28900,
    duration: "25h",
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

const categories = [
  { name: "Web Development", icon: "💻", courses: 1250 },
  { name: "Data Science", icon: "📊", courses: 890 },
  { name: "Business", icon: "💼", courses: 670 },
  { name: "Design", icon: "🎨", courses: 540 },
];

const stats = [
  { icon: Users, value: "50K+", label: "Active Students" },
  { icon: BookOpen, value: "2000+", label: "Courses" },
  { icon: Award, value: "100+", label: "Expert Instructors" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
];

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Learn Anything, Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Master new skills with expert-led courses. Join thousands of
              learners transforming their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 w-full sm:w-auto"
                >
                  Explore Courses <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
                onClick={() => setShowRegister(true)}
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="font-heading text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">
                Featured Courses
              </h2>
              <p className="text-muted-foreground">
                Explore our most popular courses
              </p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg text-center card-hover-effect cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.courses} courses
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students already learning on LearnHub. Get
            unlimited access to all courses.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
            onClick={() => setShowRegister(true)}
          >
            Get Started Now <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <span>LearnHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering learners worldwide with quality education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Browse Courses</li>
                <li>For Business</li>
                <li>Teach on LearnHub</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 LearnHub. All rights reserved.
          </div>
        </div>
      </footer>

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
