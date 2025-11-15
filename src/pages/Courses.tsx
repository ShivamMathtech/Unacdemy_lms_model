import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { CourseCard } from "../components/CourseCard";
import { Button } from "../components/ui/button";
import { Filter } from "lucide-react";

const allCourses = [
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

export default function Courses() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const filteredCourses = allCourses.filter((course) => {
    if (selectedLevel && course.level !== selectedLevel) return false;
    if (selectedPrice === "free" && course.price !== "Free") return false;
    if (selectedPrice === "paid" && course.price === "Free") return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold mb-2">All Courses</h1>
          <p className="text-muted-foreground">
            Discover courses from expert instructors
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" />
                  <h3 className="font-semibold">Filters</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Level</h4>
                    <div className="space-y-2">
                      {["Beginner", "Intermediate", "All Levels"].map(
                        (level) => (
                          <label
                            key={level}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="level"
                              checked={selectedLevel === level}
                              onChange={() =>
                                setSelectedLevel(
                                  selectedLevel === level ? null : level
                                )
                              }
                              className="text-primary"
                            />
                            <span className="text-sm">{level}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Price</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === "free"}
                          onChange={() =>
                            setSelectedPrice(
                              selectedPrice === "free" ? null : "free"
                            )
                          }
                          className="text-primary"
                        />
                        <span className="text-sm">Free</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === "paid"}
                          onChange={() =>
                            setSelectedPrice(
                              selectedPrice === "paid" ? null : "paid"
                            )
                          }
                          className="text-primary"
                        />
                        <span className="text-sm">Paid</span>
                      </label>
                    </div>
                  </div>

                  {(selectedLevel || selectedPrice) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedLevel(null);
                        setSelectedPrice(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {filteredCourses.length} courses
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
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
