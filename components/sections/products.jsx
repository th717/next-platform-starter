import Link from 'next/link';
import Image from 'next/image';

const Products = ({ 
  title = "Our Products",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText = "Shop All",
  buttonLink = "/products",
  products = [],
  className = ""
}) => {
  // Default products
  const defaultProducts = [
    {
      id: 1,
      name: "Jae Namaz",
      price: "$99",
      image: "/images/placeholders/placeholder.webp"
    },
    {
      id: 2,
      name: "Dates",
      price: "$99",
      image: "/images/placeholders/placeholder.webp"
    },
    {
      id: 3,
      name: "Miswak",
      price: "$99",
      image: "/images/placeholders/placeholder.webp"
    }
  ];

  const productItems = products.length > 0 ? products : defaultProducts;

  return (
    <section className={`w-full bg-white py-12 sm:py-16 lg:py-20 ${className}`}>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {productItems.map((product) => (
            <div key={product.id} className="text-center group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
