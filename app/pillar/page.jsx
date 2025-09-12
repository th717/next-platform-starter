import Link from 'next/link';
import { Card } from '../../components/card';

export default function PillarPage() {
    const pillarTopics = [
        {
            title: "Product Development",
            description: "Comprehensive guides on building and launching successful products",
            articles: 12,
            lastUpdated: "December 10, 2024"
        },
        {
            title: "Marketing Strategy",
            description: "Everything you need to know about effective marketing and growth",
            articles: 18,
            lastUpdated: "December 8, 2024"
        },
        {
            title: "Technology Trends",
            description: "Stay updated with the latest technology trends and innovations",
            articles: 15,
            lastUpdated: "December 5, 2024"
        },
        {
            title: "Business Operations",
            description: "Best practices for running and scaling your business operations",
            articles: 20,
            lastUpdated: "December 3, 2024"
        },
        {
            title: "User Experience",
            description: "Creating exceptional user experiences that drive engagement",
            articles: 14,
            lastUpdated: "November 30, 2024"
        },
        {
            title: "Data & Analytics",
            description: "Leveraging data to make informed business decisions",
            articles: 16,
            lastUpdated: "November 28, 2024"
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col gap-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Pillar Pages</h1>
                    <p className="text-lg text-gray-600 mb-8">Comprehensive resource hubs for key topics and themes</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillarTopics.map((topic, index) => (
                        <Card key={index} title={topic.title}>
                            <p className="text-gray-600 mb-6">{topic.description}</p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    {topic.articles} articles
                                </span>
                                <span>Updated {topic.lastUpdated}</span>
                            </div>

                            <div className="flex gap-2">
                                <Link href={`/pillar/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn flex-1">
                                    Explore Topic
                                </Link>
                                <Link href={`/pillar/${topic.title.toLowerCase().replace(/\s+/g, '-')}/articles`} className="btn btn-outline">
                                    All Articles
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
                    <p className="text-gray-600 mb-6">We're constantly adding new pillar pages and resources. Let us know what topics you'd like to see covered.</p>
                    <Link href="/contact" className="btn btn-lg">
                        Suggest a Topic
                    </Link>
                </div>

                <div className="text-center mt-8">
                    <Link href="/" className="btn btn-lg">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
