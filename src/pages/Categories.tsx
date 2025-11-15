import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import {
  Code,
  Database,
  Briefcase,
  Palette,
  Camera,
  TrendingUp,
  Music,
  Globe,
} from "lucide-react";

const categories = [
  {
    id: "web-development",
    name: "Web Development",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    courses: 1250,
    description: "Build modern websites and web applications",
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    courses: 890,
    description: "Master data analysis and machine learning",
  },
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    courses: 670,
    description: "Develop business and entrepreneurship skills",
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    courses: 540,
    description: "Create stunning visual designs",
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    courses: 420,
    description: "Capture and edit amazing photos",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: TrendingUp,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    courses: 780,
    description: "Master digital marketing strategies",
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    courses: 350,
    description: "Learn music production and theory",
  },
  {
    id: "languages",
    name: "Languages",
    icon: Globe,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    courses: 620,
    description: "Speak new languages fluently",
  },
];

export default function Categories() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Explore Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover courses across various subjects and find your passion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/courses?category=${category.id}`}>
              <Card className="p-6 card-hover-effect cursor-pointer h-full">
                <div
                  className={`w-16 h-16 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}
                >
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Badge variant="secondary">
                  {category.courses.toLocaleString()} courses
                </Badge>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Popular Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Python",
              "JavaScript",
              "Machine Learning",
              "SEO",
              "Photoshop",
              "Excel",
              "AWS",
              "Node.js",
              "Digital Marketing",
              "UI/UX Design",
              "SQL",
              "Photography",
              "Video Editing",
              "Blockchain",
            ].map((topic) => (
              <Link key={topic} to={`/courses?q=${topic.toLowerCase()}`}>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {topic}
                </Badge>
              </Link>
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
