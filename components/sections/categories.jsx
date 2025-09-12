import Link from 'next/link';
import Image from 'next/image';

const Categories = ({ 
  title = "Categories",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText = "Shop All",
  buttonLink = "/categories",
  categories = [],
  className = ""
}) => {
  // Default categories if none provided
  const defaultCategories = [
    {
      id: 1,
      name: "Food",
      image: "/images/placeholders/placeholder.webp",
      description: "Fresh and delicious food items"
    },
    {
      id: 2,
      name: "Itar",
      image: "/images/placeholders/placeholder.webp", 
      description: "Premium fragrances and perfumes"
    },
    {
      id: 3,
      name: "Tasbeeh",
      image: "/images/placeholders/placeholder.webp",
      description: "Beautiful prayer beads and accessories"
    }
  ];

  const categoryItems = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className={`w-full bg-white py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            {description}
          </p>
          <Link 
            href={buttonLink} 
            className="inline-block px-6 py-3 sm:px-8 sm:py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            {buttonText}
          </Link>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {categoryItems.map((category) => (
            <div key={category.id} className="text-center group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
