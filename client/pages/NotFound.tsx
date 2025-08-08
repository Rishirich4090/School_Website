import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-school-blue to-school-red rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">404</span>
          </div>
          <h1 className="text-6xl font-bold text-school-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-school-gray-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-school-gray-medium mb-8">
            The page you're looking for doesn't exist at OM SAI CENTRAL SCHOOL website.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-school-blue to-school-red text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
