import Link from 'next/link';
import Image from 'next/image';

const Blog = ({ 
  title = "From our blog",
  posts = [],
  className = ""
}) => {
  // Default blog posts
  const defaultPosts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/placeholders/placeholder.webp",
      logo: "/images/icons/blog.png",
      slug: "lorem-ipsum-dolor-sit-amet",
      readMoreText: "Read more"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/placeholders/placeholder.webp",
      logo: "/images/icons/blog.png",
      slug: "lorem-ipsum-dolor-sit-amet-2",
      readMoreText: "Read more"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/placeholders/placeholder.webp",
      logo: "/images/icons/blog.png",
      slug: "lorem-ipsum-dolor-sit-amet-3",
      readMoreText: "Read more"
    }
  ];

  const blogPosts = posts.length > 0 ? posts : defaultPosts;

  return (
    <section className={`w-full bg-white py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Logo overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <Image
                    src={post.logo}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300"
                >
                  {post.readMoreText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
