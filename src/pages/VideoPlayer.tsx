import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Play,
  Lock,
} from "lucide-react";
import { toast } from "sonner";

const courseContent = [
  {
    title: "Introduction to Web Development",
    lessons: [
      {
        id: "1",
        title: "Welcome to the Course",
        duration: "5:30",
        videoId: "dQw4w9WgXcQ",
        completed: false,
      },
      {
        id: "2",
        title: "How the Web Works",
        duration: "10:45",
        videoId: "dQw4w9WgXcQ",
        completed: false,
      },
      {
        id: "3",
        title: "Setting Up Your Environment",
        duration: "8:20",
        videoId: "dQw4w9WgXcQ",
        completed: false,
      },
    ],
  },
  {
    title: "HTML Fundamentals",
    lessons: [
      {
        id: "4",
        title: "HTML Basics",
        duration: "12:15",
        videoId: "dQw4w9WgXcQ",
        completed: false,
      },
      {
        id: "5",
        title: "HTML Forms",
        duration: "15:30",
        videoId: "dQw4w9WgXcQ",
        completed: false,
      },
    ],
  },
];

export default function VideoPlayer() {
  const { courseId, lessonId } = useParams();
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  // Find current lesson
  let currentLesson: any = null;
  let currentSection: any = null;

  for (const section of courseContent) {
    const lesson = section.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      currentLesson = lesson;
      currentSection = section;
      break;
    }
  }

  const handleMarkComplete = () => {
    if (currentLesson) {
      setCompletedLessons((prev) => new Set(prev).add(currentLesson.id));
      toast.success("Lesson marked as complete!");
    }
  };

  if (!currentLesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar - Chapter List */}
      <div className="w-80 border-r flex-shrink-0 overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-heading font-bold text-lg">Course Content</h2>
        </div>
        <div className="divide-y">
          {courseContent.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="p-4 bg-muted/50 font-semibold text-sm">
                {section.title}
              </div>
              {section.lessons.map((lesson) => {
                const isActive = lesson.id === lessonId;
                const isCompleted = completedLessons.has(lesson.id);

                return (
                  <a
                    key={lesson.id}
                    href={`/course/${courseId}/watch/${lesson.id}`}
                    className={`flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors ${
                      isActive ? "bg-primary/10 border-l-4 border-primary" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <Play className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-sm font-medium truncate ${
                          isActive ? "text-primary" : ""
                        }`}
                      >
                        {lesson.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {lesson.duration}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Video Player */}
      <div className="flex-1 flex flex-col">
        {/* Video Container */}
        <div className="flex-1 bg-black">
          <div className="aspect-video w-full h-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentLesson.videoId}?autoplay=1`}
              title={currentLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Info & Controls */}
        <div className="border-t bg-card">
          <div className="container mx-auto p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="font-heading text-2xl font-bold mb-2">
                  {currentLesson.title}
                </h1>
                <p className="text-muted-foreground">{currentSection.title}</p>
              </div>
              <Button onClick={handleMarkComplete} className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark as Complete
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="default" size="sm" className="gap-2">
                Next Lesson
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
