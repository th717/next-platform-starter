import { Hero, Categories, Tabs, Products, Testimonial, Blog, Features, Footer } from '../components/sections';

export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <Hero 
                title="Discover Amazing Products"
                subtitle="Find the perfect items for your lifestyle and elevate your everyday experience"
                buttonText="Shop All"
                buttonLink="/shop"
            />
            
            {/* Categories Section */}
            <Categories />
            
            {/* Tabs Section */}
            <Tabs />
            
            {/* Products Section */}
            <Products />
            
            {/* Testimonial Section */}
            <Testimonial />
            
            {/* Blog Section */}
            <Blog />
            
            {/* Features Section */}
            <Features />
            
            {/* Footer Section */}
            <Footer />
        </div>
    );
}
