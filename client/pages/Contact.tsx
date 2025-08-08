import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Building,
  GraduationCap,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Laguni Near Sai Baba Mandir - 841206",
      color: "from-school-red to-school-red-dark",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "7903542310, 7764907016",
      color: "from-school-blue to-school-blue-dark",
    },
    {
      icon: User,
      title: "Director",
      content: "Abhishek Kumar (B.Ed)",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 8:00 AM - 4:00 PM",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-school-blue to-school-red text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with OM SAI CENTRAL SCHOOL. We're here to answer your questions about admissions, 
            academics, and everything else you need to know about our school.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-br from-white via-school-gray-light to-school-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-school-gray-medium max-w-2xl mx-auto">
              Contact us through any of the following methods. We're always ready to help with your inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-school-blue mb-3">
                    {info.title}
                  </h3>
                  <p className="text-school-gray-dark leading-relaxed">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-br from-school-blue-light/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-school-blue">
                    Send us a Message
                  </CardTitle>
                  <p className="text-school-gray-medium">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-school-gray-medium">
                        Thank you for contacting us. We'll respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-school-blue font-medium">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-school-gray-medium" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10 border-school-blue-light/30 focus:border-school-blue"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-school-blue font-medium">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-school-gray-medium" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 border-school-blue-light/30 focus:border-school-blue"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-school-blue font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="min-h-[120px] border-school-blue-light/30 focus:border-school-blue resize-none"
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-school-blue to-school-red hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-school-red to-school-red-dark rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-school-blue">
                    Find Us Here
                  </CardTitle>
                  <p className="text-school-gray-medium">
                    Visit our campus at Laguni Near Sai Baba Mandir
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Map Container */}
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-school-blue-light/30">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5445!2d85.12671!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA4JzQwLjIiTiA4NcKwMDcnMzYuMSJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="OM SAI CENTRAL SCHOOL Location"
                      />
                    </div>
                    
                    {/* Location Details */}
                    <div className="bg-school-gray-light/50 rounded-lg p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <Building className="w-5 h-5 text-school-blue mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-school-blue">School Address</h4>
                          <p className="text-school-gray-dark">
                            Laguni Near Sai Baba Mandir - 841206
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-school-red mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-school-blue">Campus Facilities</h4>
                          <p className="text-school-gray-dark">
                            Modern classrooms, Computer labs, Sports grounds, Library
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-school-blue">Visiting Hours</h4>
                          <p className="text-school-gray-dark">
                            Monday to Saturday: 8:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-red text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join OM SAI CENTRAL SCHOOL?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for admissions, campus tours, or any questions about our educational programs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-white text-school-blue hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => window.open("tel:7903542310", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 7903542310
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-school-blue hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => window.open("https://maps.google.com/?q=Laguni+Near+Sai+Baba+Mandir+841206", "_blank")}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Campus
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/80 text-lg">
              <strong>Director:</strong> Abhishek Kumar (B.Ed) |{" "}
              <strong>Address:</strong> Laguni Near Sai Baba Mandir - 841206
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
