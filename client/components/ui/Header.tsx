import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from "./Logo";

const notifications = [
  { id: 1, title: "Admissions Open for 2025", type: "info" },
  { id: 2, title: "Scholarship Test Announced", type: "important" },
  { id: 3, title: "Annual Sports Day - March 15", type: "event" },
  { id: 4, title: "Parent-Teacher Meeting", type: "meeting" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-school-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-school-blue ${
                  location.pathname === item.path
                    ? "text-school-blue"
                    : "text-school-gray-dark"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-school-blue to-school-red rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Notification Bell & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Enhanced Notification Bell */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative p-2 sm:p-3 hover:bg-school-blue-light/20 hover:scale-110 transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm border border-school-blue-light/30"
                >
                  <Bell className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-school-blue stroke-2 drop-shadow-sm" />
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-school-red to-school-red-dark rounded-full flex items-center justify-center animate-pulse shadow-lg border-2 border-white">
                    <span className="text-xs sm:text-sm text-white font-bold">
                      {notifications.length}
                    </span>
                  </span>
                  <span className="absolute inset-0 rounded-full border-2 border-school-blue/20 animate-ping opacity-20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-school-blue">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-3 border-b hover:bg-school-gray-light/50 transition-colors"
                    >
                      <p className="text-sm font-medium text-school-gray-dark">
                        {notification.title}
                      </p>
                      <span
                        className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                          notification.type === "important"
                            ? "bg-school-red-light text-school-red-dark"
                            : notification.type === "event"
                            ? "bg-school-blue-light text-school-blue-dark"
                            : "bg-school-gray-light text-school-gray-medium"
                        }`}
                      >
                        {notification.type}
                      </span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-school-blue-light/20"
                >
                  <Menu className="w-5 h-5 text-school-blue" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex items-center justify-between mb-6">
                  <Logo size="sm" />
                </div>
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-school-blue to-school-red text-white"
                          : "text-school-gray-dark hover:bg-school-blue-light/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
