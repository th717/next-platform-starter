import Image from 'next/image';

const Features = ({ 
  features = [],
  className = ""
}) => {
  // Default features
  const defaultFeatures = [
    {
      id: 1,
      title: "Exceptional Service",
      description: "Proin ultices scelerisque que pretium mae purus accumsan nulla elementum",
      icon: "/images/placeholders/placeholder.webp"
    },
    {
      id: 2,
      title: "Best Price Every Day",
      description: "Proin ultices scelerisque que pretium mae purus accumsan nulla elementum",
      icon: "/images/placeholders/placeholder.webp"
    },
    {
      id: 3,
      title: "Best Price Every Day",
      description: "Proin ultices scelerisque que pretium mae purus accumsan nulla elementum",
      icon: "/images/placeholders/placeholder.webp"
    },
    {
      id: 4,
      title: "Best Price Every Day",
      description: "Proin ultices scelerisque que pretium mae purus accumsan nulla elementum",
      icon: "/images/placeholders/placeholder.webp"
    }
  ];

  const featureItems = features.length > 0 ? features : defaultFeatures;

  return (
    <section className={`w-full bg-gray-100 py-12 sm:py-16 lg:py-20 relative ${className}`}>
      {/* Purple top border */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {featureItems.map((feature) => (
            <div key={feature.id} className="text-center group">
              {/* Icon Circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
