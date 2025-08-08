import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Shield,
  Award,
  GraduationCap,
  Computer,
  Palette,
  Trophy,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Building,
  Camera,
  PlayCircle,
  Star,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const campusImages = [
    {
      id: 1,
      title: "Main School Building",
      description: "Modern architecture with spacious classrooms and facilities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800",
    },
    {
      id: 2,
      title: "Campus Front Entrance",
      description: "Welcome to OM SAI CENTRAL SCHOOL - CBSE Pattern",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F10c59778895448e4b5c7824f1a210b26?format=webp&width=800",
    },
    {
      id: 3,
      title: "School Infrastructure",
      description: "Well-designed campus with modern educational facilities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9c6ddf36d3474c018ed6cf07c840ee2c?format=webp&width=800",
    },
    {
      id: 4,
      title: "Creative Learning Spaces",
      description: "Innovative outdoor areas designed for interactive learning",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fac2d2bfc6d1d4f8b92ab4804e6676bf4?format=webp&width=800",
    },
    {
      id: 5,
      title: "Evening Campus View",
      description: "Beautiful campus atmosphere during evening hours",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F91254df133ae431f8cef788a9c8e6c1a?format=webp&width=800",
    },
  ];

  const schoolValues = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Quality education based on CBSE curriculum with modern teaching methodologies",
      color: "from-school-blue to-school-blue-dark",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "CCTV monitored campus with trained security personnel ensuring student safety",
      color: "from-school-red to-school-red-dark",
    },
    {
      icon: Users,
      title: "Discipline",
      description: "Structured environment promoting respect, responsibility, and character building",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Star,
      title: "Development",
      description: "Holistic development through academics, sports, arts, and personality enhancement",
      color: "from-green-500 to-green-700",
    },
  ];

  const coActivities = [
    {
      icon: Palette,
      title: "Art & Craft",
      description: "Creative workshops and artistic expression sessions",
    },
    {
      icon: Trophy,
      title: "Sports Activities",
      description: "Football, Cricket, Basketball, Athletics, and Indoor Games",
    },
    {
      icon: Computer,
      title: "Smart Classes",
      description: "Interactive digital learning with multimedia presentations",
    },
    {
      icon: PlayCircle,
      title: "Cultural Programs",
      description: "Dance, Music, Drama, and Annual Day celebrations",
    },
  ];

  const academicFeatures = [
    "CBSE Affiliated Curriculum",
    "English Spoken Environment",
    "Experienced & Trained Teachers",
    "Individual Attention & Mentorship",
    "Regular Assessment & Feedback",
    "Science & Math Laboratories",
    "Library with Extensive Resources",
    "Scholarship Programs Available",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-school-blue to-school-red text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            OM SAI CENTRAL SCHOOL is committed to providing excellence in education through innovative teaching methods, 
            modern infrastructure, and a nurturing environment that fosters holistic development.
          </p>
        </div>
      </section>

      {/* Academic Curriculum Overview */}
      <section className="py-20 bg-gradient-to-br from-white via-school-gray-light to-school-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-6">
                Academic Excellence
              </h2>
              <p className="text-lg text-school-gray-medium mb-8 leading-relaxed">
                Our CBSE-affiliated curriculum is designed to provide comprehensive education that prepares students 
                for future challenges while maintaining strong foundational knowledge and critical thinking skills.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-school-blue-light/30"
                  >
                    <CheckCircle className="w-5 h-5 text-school-blue flex-shrink-0" />
                    <span className="text-school-gray-dark text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-blue">CBSE Pattern</h3>
                    <p className="text-school-gray-medium">Session 2025</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-school-gray-dark">Classes Offered</span>
                      <Badge className="bg-school-blue text-white">Nursery to Class XII</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-school-gray-dark">Medium of Instruction</span>
                      <Badge className="bg-school-red text-white">English</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-school-gray-dark">Student-Teacher Ratio</span>
                      <Badge className="bg-green-500 text-white">20:1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 bg-gradient-to-br from-school-blue-light/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Co-curricular Activities
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Beyond academics, we offer diverse activities to nurture creativity, physical fitness, and overall personality development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coActivities.map((activity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/60 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-school-blue mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-school-gray-medium text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Values */}
      <section className="py-20 bg-gradient-to-br from-white to-school-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              The fundamental principles that guide our educational philosophy and institutional culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-school-blue mb-4 relative">
                    {value.title}
                  </h3>
                  <p className="text-school-gray-medium leading-relaxed relative">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure Carousel */}
      <section className="py-20 bg-gradient-to-br from-school-blue-light/20 via-white to-school-red-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Campus Infrastructure
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Modern facilities designed to provide the best learning environment for our students
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <div className="relative">
                <div 
                  className="aspect-video bg-school-gray-light bg-cover bg-center flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${campusImages[currentSlide].image}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 text-center text-white p-8">
                    <Camera className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      {campusImages[currentSlide].title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {campusImages[currentSlide].description}
                    </p>
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 p-6 bg-white">
                {campusImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-school-blue scale-125"
                        : "bg-school-gray-medium hover:bg-school-blue-light"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-school-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Campus Life
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Glimpses of our vibrant campus, dedicated students, and modern learning environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Student Assembly", image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fea4ad08bb0c54cab92e265c508971ee1?format=webp&width=800" },
              { title: "Outdoor Learning", image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Ff9c35229ad88403c88251df7bc06b777?format=webp&width=800" },
              { title: "Community Meeting", image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9f468043d250415b80e054a633e01de7?format=webp&width=800" },
              { title: "Campus Infrastructure", image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800" },
            ].map((photo, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <div className="relative aspect-square">
                  <div 
                    className="absolute inset-0 bg-school-gray-light bg-cover bg-center"
                    style={{ backgroundImage: `url('${photo.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-school-blue">{photo.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach & Safety */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-red text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Teaching Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">English Spoken Environment</h3>
                    <p className="text-white/90">
                      Complete English immersion to enhance communication skills and global readiness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mentorship by Trained Teachers</h3>
                    <p className="text-white/90">
                      Individual attention and guidance from experienced, qualified educators.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scholarship Programs</h3>
                    <p className="text-white/90">
                      Merit-based scholarships to encourage academic excellence and support deserving students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Safe & Secure Campus</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-white" />
                      <span>24/7 CCTV Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-white" />
                      <span>Trained Security Personnel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-white" />
                      <span>Controlled Access Campus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-white" />
                      <span>Student Welfare Priority</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
