import { Hero, Categories } from '../../components/sections';

export default function LandingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section - Full Width */}
            <Hero 
                title="Discover Amazing Products"
                subtitle="Find the perfect items for your lifestyle and elevate your everyday experience"
                buttonText="Shop All"
                buttonLink="/shop"
            />
            
            {/* Categories Section */}
            <Categories />
        </div>
    );
}


