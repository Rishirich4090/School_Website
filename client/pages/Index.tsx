import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Computer,
  Palette,
  Shield,
  MapPin,
  Phone,
  Star,
  ChevronRight,
} from "lucide-react";

export default function Index() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const staffMembers = [
    {
      id: 1,
      name: "Abhishek Kumar",
      position: "Director",
      qualification: "B.Ed",
      description: "Leading with vision and educational excellence",
      image: "/api/placeholder/150/150",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Principal",
      qualification: "M.Ed, Ph.D",
      description: "Dedicated to academic achievement and student growth",
      image: "/api/placeholder/150/150",
    },
    {
      id: 3,
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      qualification: "M.A, B.Ed",
      description: "Committed to nurturing young minds with care",
      image: "/api/placeholder/150/150",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "English Spoken Environment",
      description: "Immersive English communication throughout campus",
    },
    {
      icon: Computer,
      title: "Computer Labs",
      description: "State-of-the-art technology for digital learning",
    },
    {
      icon: GraduationCap,
      title: "Smart Classes",
      description: "Interactive digital classrooms with modern tools",
    },
    {
      icon: Users,
      title: "Sports & Playgrounds",
      description: "Comprehensive sports facilities for physical development",
    },
    {
      icon: Palette,
      title: "Art & Craft",
      description: "Creative workshops to nurture artistic talents",
    },
    {
      icon: Shield,
      title: "CCTV Security",
      description: "Complete safety with trained staff and monitoring",
    },
  ];

  const achievements = [
    { number: "500+", label: "Happy Students" },
    { number: "25+", label: "Experienced Teachers" },
    { number: "10+", label: "Years of Excellence" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <Layout showWatermark={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-school-blue via-school-blue-light to-school-red">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <GraduationCap className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              OM SAI CENTRAL SCHOOL
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 text-lg px-6 py-2">
                Based on CBSE Pattern
              </Badge>
              <Badge className="bg-school-red/80 backdrop-blur-sm border border-white/30 text-white hover:bg-school-red text-lg px-6 py-2">
                Session: 2025
              </Badge>
            </div>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nurturing Young Minds with Quality Education, Modern Facilities, and Values-Based Learning
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 lg:p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gradient-to-br from-white via-school-gray-light to-school-blue-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Meet our dedicated educators committed to excellence in education and student development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffMembers.map((staff, index) => (
              <Card
                key={staff.id}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  hoveredCard === staff.id ? "shadow-2xl" : "shadow-lg"
                } border-0 bg-white/80 backdrop-blur-sm hover:bg-white`}
                onMouseEnter={() => setHoveredCard(staff.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === staff.id 
                    ? `perspective(1000px) rotateX(5deg) rotateY(${index % 2 === 0 ? '-' : ''}5deg)`
                    : 'none',
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-school-blue to-school-red p-1">
                      <div className="w-full h-full rounded-full bg-school-gray-light flex items-center justify-center">
                        <Users className="w-16 h-16 text-school-blue" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-school-red rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" fill="white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-school-blue mb-2">
                    {staff.name}
                  </h3>
                  <p className="text-school-red font-semibold mb-1">
                    {staff.position}
                  </p>
                  <p className="text-school-gray-medium text-sm mb-3">
                    {staff.qualification}
                  </p>
                  <p className="text-school-gray-dark text-sm leading-relaxed">
                    {staff.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-school-blue-light/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Why Choose OM SAI CENTRAL SCHOOL?
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Comprehensive education with modern facilities and experienced faculty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/60 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-school-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-school-gray-medium leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Admissions are now open for the 2025 session. Give your child the best education with modern facilities and caring teachers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-white/95 backdrop-blur-sm text-school-blue font-semibold hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg border border-white/20"
              onClick={() => window.open("https://maps.google.com/?q=Laguni+Near+Sai+Baba+Mandir+841206", "_blank")}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Campus
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-school-blue hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => window.open("tel:7903542310", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 7903542310
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-white/80 text-sm">
                Laguni Near Sai Baba Mandir - 841206
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-white/80 text-sm">
                7903542310, 7764907016
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="w-8 h-8 mx-auto mb-3 text-white" />
              <h4 className="font-semibold mb-2">Accreditation</h4>
              <p className="text-white/80 text-sm">
                CBSE Affiliated School
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
