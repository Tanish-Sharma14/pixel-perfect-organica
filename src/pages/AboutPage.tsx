import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header
        cartCount={0}
        wishlistCount={0}
        onCartClick={() => {}}
        onWishlistClick={() => {}}
      />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About GreenBasket
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner for fresh, organic produce across India
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2020, GreenBasket was born from a simple vision: to make fresh, 
                  organic produce accessible to every household across India. We started as a 
                  small family business in Mumbai and have grown to serve customers nationwide.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our journey began when we realized the gap between farmers growing exceptional 
                  organic produce and consumers seeking healthy, fresh food. We bridge this gap 
                  by working directly with certified organic farmers across India.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to support over 500 organic farmers and deliver fresh 
                  produce to thousands of families every week, promoting sustainable agriculture 
                  and healthy living.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Organic farming in India" 
                  className="rounded-lg shadow-green w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-service-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at GreenBasket
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Organic Quality</h3>
                <p className="text-muted-foreground">
                  100% certified organic produce, free from harmful chemicals and pesticides
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
                <p className="text-muted-foreground">
                  Supporting farmers with fair prices and sustainable farming practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the highest quality products and services
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building healthier communities through access to nutritious food
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Fresh vegetables and fruits" 
                  className="rounded-lg shadow-green w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To revolutionize how India accesses fresh, organic food by creating 
                  a sustainable ecosystem that benefits farmers, communities, and the environment.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We believe that everyone deserves access to healthy, nutritious food. 
                  Our mission extends beyond just delivering groceries – we're building 
                  a movement towards sustainable agriculture and healthier lifestyles.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Support local farmers and sustainable agriculture</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Provide fresh, organic produce at affordable prices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Reduce food waste through efficient distribution</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">Promote healthy eating habits across communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-service-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind GreenBasket's mission
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Founder" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Rahul Sharma</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  15+ years in sustainable agriculture and supply chain management
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Operations Head" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Priya Patel</h3>
                <p className="text-primary mb-2">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Expert in logistics and quality assurance with 10+ years experience
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Farmer Relations" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Arjun Kumar</h3>
                <p className="text-primary mb-2">Farmer Relations Manager</p>
                <p className="text-muted-foreground text-sm">
                  Building bridges between farmers and consumers for over 8 years
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;