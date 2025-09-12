import Link from 'next/link';
import { Card } from '../../components/card';

export default function PricingPage() {
    const pricingPlans = [
        {
            name: "Starter",
            price: "$9",
            period: "per month",
            description: "Perfect for individuals and small projects",
            features: [
                "Up to 5 projects",
                "10GB storage",
                "Basic support",
                "Standard templates",
                "Mobile app access"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$29",
            period: "per month",
            description: "Ideal for growing businesses and teams",
            features: [
                "Unlimited projects",
                "100GB storage",
                "Priority support",
                "Premium templates",
                "Advanced analytics",
                "Team collaboration",
                "API access"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "per month",
            description: "For large organizations with advanced needs",
            features: [
                "Everything in Professional",
                "Unlimited storage",
                "24/7 phone support",
                "Custom integrations",
                "Dedicated account manager",
                "SLA guarantee",
                "On-premise deployment"
            ],
            popular: false
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="flex flex-col gap-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
                    <p className="text-lg text-gray-600 mb-8">Choose the perfect plan for your needs</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <Card 
                                title={plan.name}
                                className={`h-full ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}
                            >
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {plan.price}
                                        <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                                    </div>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href="/contact" 
                                    className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-colors ${
                                        plan.popular 
                                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                            : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-600 mb-4">Need a custom solution?</p>
                    <Link href="/contact" className="btn btn-lg">
                        Contact Sales
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
