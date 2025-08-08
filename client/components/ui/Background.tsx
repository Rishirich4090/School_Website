import { cn } from "@/lib/utils";
import Logo from "./Logo";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
  showWatermark?: boolean;
  variant?: "default" | "gradient" | "hero";
}

const Background = ({ 
  children, 
  className, 
  showWatermark = true,
  variant = "default" 
}: BackgroundProps) => {
  const backgroundClasses = cn(
    "relative min-h-screen",
    variant === "default" && "bg-gradient-to-br from-school-blue-light/20 via-white to-school-red-light/20",
    variant === "gradient" && "bg-gradient-to-br from-school-blue via-school-blue-light to-school-red/20",
    variant === "hero" && "bg-gradient-to-br from-school-blue via-school-blue-light to-school-red opacity-90",
    className
  );

  return (
    <div className={backgroundClasses}>
      {/* Watermark Logo */}
      {showWatermark && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
          <div className="transform scale-150 lg:scale-200">
            <Logo 
              size="xl" 
              showText={false} 
              variant="watermark" 
              className="w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
            />
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
