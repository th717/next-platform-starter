import Link from 'next/link';
import { Card } from '../../components/card';

export default function GuidePage() {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Guide Articles</h1>
                    <p className="text-lg text-gray-600 mb-8">Comprehensive guides to help you get the most out of our platform</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card title="Getting Started">
                        <p className="mb-4">Learn the basics of our platform and how to navigate through all the features.</p>
                        <Link href="/guide/getting-started" className="btn">
                            Read More
                        </Link>
                    </Card>

                    <Card title="Advanced Features">
                        <p className="mb-4">Discover advanced features and customization options available to power users.</p>
                        <Link href="/guide/advanced-features" className="btn">
                            Read More
                        </Link>
                    </Card>

                    <Card title="Best Practices">
                        <p className="mb-4">Follow our recommended best practices for optimal performance and results.</p>
                        <Link href="/guide/best-practices" className="btn">
                            Read More
                        </Link>
                    </Card>

                    <Card title="Troubleshooting">
                        <p className="mb-4">Common issues and their solutions to help you resolve problems quickly.</p>
                        <Link href="/guide/troubleshooting" className="btn">
                            Read More
                        </Link>
                    </Card>

                    <Card title="API Documentation">
                        <p className="mb-4">Complete API reference for developers integrating with our platform.</p>
                        <Link href="/guide/api-docs" className="btn">
                            Read More
                        </Link>
                    </Card>

                    <Card title="Security Guide">
                        <p className="mb-4">Learn about security best practices and how to keep your data safe.</p>
                        <Link href="/guide/security" className="btn">
                            Read More
                        </Link>
                    </Card>
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
