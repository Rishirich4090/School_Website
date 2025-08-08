import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <footer className="bg-gradient-to-r from-school-blue to-school-red text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo variant="white" size="md" />
            <p className="text-white/80 text-sm mt-4">
              Providing quality education based on CBSE pattern with modern facilities and experienced faculty.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>Laguni Near Sai Baba Mandir - 841206</p>
              <p>Phone: 7903542310, 7764907016</p>
              <p>Director: Abhishek Kumar (B.Ed)</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © 2025 OM SAI CENTRAL SCHOOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
