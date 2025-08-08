import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  variant?: "default" | "white" | "watermark";
}

const Logo = ({ 
  size = "md", 
  className, 
  showText = true,
  variant = "default" 
}: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10 lg:w-12 lg:h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20 lg:w-24 lg:h-24"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg lg:text-xl",
    lg: "text-xl lg:text-2xl", 
    xl: "text-2xl lg:text-3xl"
  };

  const logoClasses = cn(
    "rounded-full object-cover",
    sizeClasses[size],
    variant === "watermark" && "opacity-10 grayscale",
    variant === "white" && "border-2 border-white/20",
    className
  );

  const textClasses = cn(
    "font-bold",
    textSizeClasses[size],
    variant === "default" && "text-school-blue",
    variant === "white" && "text-white",
    variant === "watermark" && "text-school-blue/10"
  );

  const subtextClasses = cn(
    variant === "default" && "text-school-gray-medium",
    variant === "white" && "text-white/80", 
    variant === "watermark" && "text-school-gray-medium/10",
    size === "sm" ? "text-xs" : size === "lg" || size === "xl" ? "text-sm lg:text-base" : "text-xs lg:text-sm"
  );

  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9b8d345c545742bfa38014d61993c6fa%2F49a692ab3150421facb1a8d4e152d812?format=webp&width=800"
          alt="OM SAI CENTRAL SCHOOL Logo"
          className={logoClasses}
        />
      </div>
      
      {showText && (
        <div className={cn(
          "transition-all duration-300",
          size === "sm" && "hidden sm:block"
        )}>
          <h1 className={textClasses}>
            OM SAI CENTRAL SCHOOL
          </h1>
          <p className={subtextClasses}>
            CBSE Pattern • Session 2025
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
