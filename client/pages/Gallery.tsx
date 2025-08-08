import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Trophy,
  Palette,
  BookOpen,
  Building,
  Heart,
  Star,
} from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { name: "All", icon: Camera, count: 24 },
    { name: "Annual Function", icon: Star, count: 8 },
    { name: "Classrooms", icon: BookOpen, count: 6 },
    { name: "Sports Day", icon: Trophy, count: 5 },
    { name: "Art & Craft", icon: Palette, count: 5 },
  ];

  const galleryImages: GalleryImage[] = [
    // Annual Function
    {
      id: 1,
      title: "Students Assembly Formation",
      category: "Annual Function",
      description: "Students in perfect formation during morning assembly",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fea4ad08bb0c54cab92e265c508971ee1?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 2,
      title: "Outdoor Sports Activity",
      category: "Annual Function",
      description: "Students engaged in outdoor physical education activities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Ff9c35229ad88403c88251df7bc06b777?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 3,
      title: "School Community Meeting",
      category: "Annual Function",
      description: "Important community gathering in school reception area",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9f468043d250415b80e054a633e01de7?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 4,
      title: "Main School Building",
      category: "Annual Function",
      description: "Beautiful view of our main school building and campus",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 5,
      title: "Campus Front View",
      category: "Annual Function",
      description: "Front entrance and main building of OM SAI CENTRAL SCHOOL",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F10c59778895448e4b5c7824f1a210b26?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 6,
      title: "School Campus Side View",
      category: "Annual Function",
      description: "Side view showing the architectural design of our school",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9c6ddf36d3474c018ed6cf07c840ee2c?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 7,
      title: "Creative Campus Environment",
      category: "Annual Function",
      description: "Innovative outdoor learning spaces with colorful elements",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fac2d2bfc6d1d4f8b92ab4804e6676bf4?format=webp&width=800",
      date: "March 2024",
    },
    {
      id: 8,
      title: "Evening Campus View",
      category: "Annual Function",
      description: "Beautiful evening view of our school campus and facilities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F91254df133ae431f8cef788a9c8e6c1a?format=webp&width=800",
      date: "March 2024",
    },

    // Classrooms
    {
      id: 9,
      title: "Reception Area Meeting",
      category: "Classrooms",
      description: "Important educational meeting in our well-equipped reception area",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9f468043d250415b80e054a633e01de7?format=webp&width=800",
      date: "February 2024",
    },
    {
      id: 10,
      title: "School Building Architecture",
      category: "Classrooms",
      description: "Modern classroom building with excellent infrastructure",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800",
      date: "February 2024",
    },
    {
      id: 11,
      title: "Learning Environment",
      category: "Classrooms",
      description: "Spacious and well-designed learning spaces for students",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F10c59778895448e4b5c7824f1a210b26?format=webp&width=800",
      date: "January 2024",
    },
    {
      id: 12,
      title: "Campus Infrastructure",
      category: "Classrooms",
      description: "Well-planned campus layout with modern facilities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9c6ddf36d3474c018ed6cf07c840ee2c?format=webp&width=800",
      date: "January 2024",
    },
    {
      id: 13,
      title: "Creative Learning Spaces",
      category: "Classrooms",
      description: "Innovative outdoor learning areas with interactive elements",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fac2d2bfc6d1d4f8b92ab4804e6676bf4?format=webp&width=800",
      date: "February 2024",
    },
    {
      id: 14,
      title: "Campus Evening View",
      category: "Classrooms",
      description: "Beautiful campus atmosphere during evening hours",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F91254df133ae431f8cef788a9c8e6c1a?format=webp&width=800",
      date: "February 2024",
    },

    // Sports Day
    {
      id: 15,
      title: "Students Formation Display",
      category: "Sports Day",
      description: "Impressive student formation during sports and assembly activities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fea4ad08bb0c54cab92e265c508971ee1?format=webp&width=800",
      date: "December 2023",
    },
    {
      id: 16,
      title: "Outdoor Physical Training",
      category: "Sports Day",
      description: "Students engaged in outdoor physical education and sports",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Ff9c35229ad88403c88251df7bc06b777?format=webp&width=800",
      date: "December 2023",
    },
    {
      id: 17,
      title: "Main Building Sports Area",
      category: "Sports Day",
      description: "Sports activities conducted near our main school building",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F951e7dc587434da68d12926d1eb03319?format=webp&width=800",
      date: "December 2023",
    },
    {
      id: 18,
      title: "Campus Sports Facilities",
      category: "Sports Day",
      description: "Excellent sports infrastructure and open spaces for activities",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F10c59778895448e4b5c7824f1a210b26?format=webp&width=800",
      date: "December 2023",
    },
    {
      id: 19,
      title: "Outdoor Play Areas",
      category: "Sports Day",
      description: "Creative and spacious outdoor areas for sports and recreation",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fac2d2bfc6d1d4f8b92ab4804e6676bf4?format=webp&width=800",
      date: "December 2023",
    },

    // Art & Craft
    {
      id: 20,
      title: "Creative Campus Design",
      category: "Art & Craft",
      description: "Artistic and creative elements integrated into campus design",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fac2d2bfc6d1d4f8b92ab4804e6676bf4?format=webp&width=800",
      date: "November 2023",
    },
    {
      id: 21,
      title: "Evening Campus Artistry",
      category: "Art & Craft",
      description: "Beautiful artistic view of campus during evening time",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F91254df133ae431f8cef788a9c8e6c1a?format=webp&width=800",
      date: "November 2023",
    },
    {
      id: 22,
      title: "Architectural Excellence",
      category: "Art & Craft",
      description: "Artistic architectural design of our school building",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9c6ddf36d3474c018ed6cf07c840ee2c?format=webp&width=800",
      date: "October 2023",
    },
    {
      id: 23,
      title: "Community Arts Program",
      category: "Art & Craft",
      description: "Community participation in arts and educational programs",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F9f468043d250415b80e054a633e01de7?format=webp&width=800",
      date: "October 2023",
    },
    {
      id: 24,
      title: "Student Artistic Formation",
      category: "Art & Craft",
      description: "Students showcasing artistic formations and teamwork",
      image: "https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2Fea4ad08bb0c54cab92e265c508971ee1?format=webp&width=800",
      date: "September 2023",
    },
  ];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    
    const newIndex = direction === "next" 
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-school-blue to-school-red text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Memories & Activities</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore the vibrant life at OM SAI CENTRAL SCHOOL through our photo gallery showcasing 
            memorable moments, achievements, and daily activities of our students and staff.
          </p>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-12 bg-gradient-to-br from-white via-school-gray-light to-school-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Photos", icon: Camera },
              { number: "50+", label: "Events", icon: Calendar },
              { number: "25+", label: "Activities", icon: Heart },
              { number: "4", label: "Categories", icon: Building },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-school-blue">{stat.number}</div>
                  <div className="text-school-gray-medium text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-school-blue-light/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-school-blue mb-4">
              Browse by Category
            </h2>
            <p className="text-school-gray-medium">
              Filter photos by activity type to find exactly what you're looking for
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-school-blue to-school-red text-white shadow-lg"
                    : "border-school-blue-light text-school-blue hover:bg-school-blue-light/20"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    selectedCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-school-blue-light/20 text-school-blue"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-white to-school-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
                onClick={() => openLightbox(image)}
                style={{
                  transform: `perspective(1000px) rotateX(${Math.sin(index * 0.5) * 2}deg) rotateY(${Math.cos(index * 0.3) * 2}deg)`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${Math.sin(index * 0.5) * 2}deg) rotateY(${Math.cos(index * 0.3) * 2}deg)`;
                }}
              >
                <div className="relative aspect-square">
                  <div 
                    className="absolute inset-0 bg-school-gray-light bg-cover bg-center"
                    style={{ backgroundImage: `url('${image.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Badge className="self-start bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                      {image.category}
                    </Badge>
                    <div className="text-center">
                      <Camera className="w-8 h-8 mx-auto mb-2 text-white" />
                      <p className="text-white text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-school-blue mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-school-gray-medium text-sm mb-2 line-clamp-2">
                    {image.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-school-gray-medium">{image.date}</span>
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 mx-auto mb-4 text-school-gray-medium" />
              <h3 className="text-xl font-semibold text-school-blue mb-2">
                No images found
              </h3>
              <p className="text-school-gray-medium">
                Try selecting a different category to view more photos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/90 border-0">
          {selectedImage && (
            <>
              <DialogHeader className="absolute top-4 left-4 right-4 z-10">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-white text-lg font-semibold">
                    {selectedImage.title}
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={closeLightbox}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="relative aspect-video">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedImage.image}')` }}
                />
                
                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                      onClick={() => navigateImage("prev")}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                      onClick={() => navigateImage("next")}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80 mb-2">{selectedImage.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white">
                      {selectedImage.category}
                    </Badge>
                    <span className="text-white/60 text-sm">{selectedImage.date}</span>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute top-20 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {currentImageIndex + 1} / {filteredImages.length}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
