import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  price: string;
}

export const CourseCard = ({
  id,
  title,
  instructor,
  thumbnail,
  rating,
  students,
  duration,
  level,
  price,
}: CourseCardProps) => {
  return (
    <Link to={`/course/${id}`}>
      <Card className="overflow-hidden card-hover-effect cursor-pointer group">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={price === "Free" ? "secondary" : "default"}>
              {price}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {level}
            </Badge>
          </div>
          <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
