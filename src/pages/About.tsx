import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginModal } from "../components/LoginModal";
import { RegisterModal } from "../components/RegisterModal";
import { Card } from "../components/ui/card";
import { Target, Users, Award, Heart, Globe, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Democratizing education and making quality learning accessible to everyone",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive learning community that grows together",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Partnering with expert instructors to deliver world-class content",
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your growth and achievement are our top priorities",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connecting learners worldwide through accessible online education",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Constantly improving our platform with cutting-edge technology",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Education",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "David Kim",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export default function About() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {/* Hero */}
      <div className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            About LearnHub
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're on a mission to make quality education accessible to everyone,
            everywhere. Join millions of learners transforming their lives
            through learning.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                50K+
              </div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                2000+
              </div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                100+
              </div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              LearnHub was founded in 2024 with a simple but powerful vision: to
              make world-class education accessible to anyone with an internet
              connection.
            </p>
            <p>
              We believe that education is the key to unlocking human potential.
              That's why we've partnered with expert instructors from around the
              world to create courses that are both comprehensive and practical.
            </p>
            <p>
              Today, we're proud to serve over 50,000 students across 150
              countries, helping them achieve their learning goals and advance
              their careers.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
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
