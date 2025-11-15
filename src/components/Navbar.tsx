import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Search, BookOpen, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Navbar = ({ onLoginClick, onRegisterClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold text-xl"
          >
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/categories"
              className="text-foreground hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={onLoginClick}>
              Login
            </Button>
            <Button onClick={onRegisterClick}>Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative w-full mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 bg-muted border-0 rounded-lg"
              />
            </div>
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block py-2 text-foreground hover:text-primary"
            >
              Courses
            </Link>
            <Link
              to="/categories"
              className="block py-2 text-foreground hover:text-primary"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary"
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" onClick={onLoginClick} className="w-full">
                Login
              </Button>
              <Button onClick={onRegisterClick} className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
