import Link from 'next/link';
import { Card } from '../../components/card';

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of E-commerce",
            excerpt: "Exploring the latest trends and technologies shaping the future of online retail.",
            date: "December 15, 2024",
            category: "Technology",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Design Systems That Scale",
            excerpt: "How to build and maintain design systems that grow with your business.",
            date: "December 10, 2024",
            category: "Design",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "Performance Optimization Tips",
            excerpt: "Proven strategies to improve your website's speed and user experience.",
            date: "December 5, 2024",
            category: "Development",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "User Experience Best Practices",
            excerpt: "Creating intuitive and engaging user experiences that convert visitors into customers.",
            date: "November 28, 2024",
            category: "UX",
            readTime: "8 min read"
        },
        {
            id: 5,
            title: "Mobile-First Development",
            excerpt: "Why mobile-first design is crucial and how to implement it effectively.",
            date: "November 20, 2024",
            category: "Development",
            readTime: "4 min read"
        },
        {
            id: 6,
            title: "Content Strategy for Growth",
            excerpt: "Building a content strategy that drives traffic and engages your audience.",
            date: "November 15, 2024",
            category: "Marketing",
            readTime: "9 min read"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Articles</h1>
                    <p className="text-lg text-gray-600 mb-8">Insights, tutorials, and industry news from our team</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Card key={post.id} title={post.title}>
                            <div className="mb-4">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                        {post.category}
                                    </span>
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <p className="text-gray-600">{post.excerpt}</p>
                            </div>
                            <Link href={`/blog/${post.id}`} className="btn">
                                Read Article
                            </Link>
                        </Card>
                    ))}
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
