import Link from 'next/link';

const Footer = ({ 
  newsletter = {
    title: "Sign up for our newsletter",
    description: "Be the first to know about our special offers, news, and updates.",
    placeholder: "Email Address",
    buttonText: "Sign Up"
  },
  links = [],
  copyright = "COPYRIGHTS SITE.COM. ALL RIGHTS RESERVED",
  className = ""
}) => {
  // Default navigation links
  const defaultLinks = [
    {
      title: "Lorem Ipsum",
      items: [
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" }
      ]
    },
    {
      title: "Lorem Ipsum",
      items: [
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" }
      ]
    },
    {
      title: "Lorem Ipsum",
      items: [
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" },
        { text: "Lorem", href: "#" }
      ]
    }
  ];

  const linkSections = links.length > 0 ? links : defaultLinks;

  return (
    <footer className={`w-full ${className}`}>
      {/* Main Footer Content */}
      <div className="bg-white py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Newsletter Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {newsletter.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {newsletter.description}
                </p>
              </div>
              
              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm sm:text-base"
                />
                <button className="px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium rounded hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
                  {newsletter.buttonText}
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {linkSections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link 
                          href={item.href}
                          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-xs sm:text-sm font-medium uppercase tracking-wide">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
