import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { CourseCard } from "../components/CourseCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const enrolledCourses = [
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
    progress: 65,
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
    progress: 30,
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
    progress: 15,
  },
];

const completedCourses = [
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
    progress: 100,
  },
];

const wishlistCourses = [
  {
    id: "5",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    rating: 4.8,
    students: 38500,
    duration: "52h",
    level: "Intermediate",
    price: "$44",
  },
  {
    id: "6",
    title: "Data Science Bootcamp",
    instructor: "Jose Portilla",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    rating: 4.9,
    students: 41200,
    duration: "45h",
    level: "Beginner",
    price: "Free",
  },
];

export default function MyCourses() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-4xl font-bold mb-8">My Courses</h1>

        <Tabs defaultValue="learning" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="learning">
              Learning ({enrolledCourses.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedCourses.length})
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              Wishlist ({wishlistCourses.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learning">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard {...course} />
                  <Card className="p-4 -mt-2 rounded-t-none border-t-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard {...course} />
                  <Card className="p-4 -mt-2 rounded-t-none border-t-0 bg-primary/5">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Course Completed
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
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
