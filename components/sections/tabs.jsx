'use client';

import { useState } from 'react';
import Image from 'next/image';

const Tabs = ({ 
  title = "Tabs are a simple way to highlight your app's features",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tabs = [],
  className = ""
}) => {
  // Default tabs with different content
  const defaultTabs = [
    {
      id: 'active-tab',
      label: 'Active Tab',
      content: {
        image: '/images/placeholders/placeholder.webp',
        description: 'Invoice Details - Transaction management interface'
      }
    },
    {
      id: 'tab-two',
      label: 'Tab Two',
      content: {
        image: '/images/placeholders/placeholder.webp',
        description: 'Contact List - User management and communication'
      }
    },
    {
      id: 'tab-three',
      label: 'Tab Three',
      content: {
        image: '/images/placeholders/placeholder.webp',
        description: 'Dashboard - Analytics and performance metrics'
      }
    },
    {
      id: 'tab-four',
      label: 'Tab Four',
      content: {
        image: '/images/placeholders/placeholder.webp',
        description: 'Analytics - Data visualization and insights'
      }
    }
  ];

  const tabItems = tabs.length > 0 ? tabs : defaultTabs;
  const [activeTab, setActiveTab] = useState(tabItems[0].id);

  const currentTab = tabItems.find(tab => tab.id === activeTab);

  const renderContent = () => {
    if (!currentTab) return null;

    return (
      <div className="w-full">
        <div className="rounded-2xl shadow-lg p-2">
          <div className="aspect-video bg-white rounded-lg overflow-hidden">
            <Image
              src={currentTab.content.image || '/images/placeholders/placeholder.webp'}
              alt={`${currentTab.label} content`}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`w-full bg-gray-50 py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            {subtitle}
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 sm:mb-12">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex justify-center">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
