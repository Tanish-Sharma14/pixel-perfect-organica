import { CheckCircle, Award, Users, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: '100% Organic',
      description: 'All our products are certified organic and pesticide-free.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest quality products from trusted farmers.',
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'A family business dedicated to providing healthy food options.',
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Farm-fresh products delivered directly to your doorstep.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Product Varieties' },
    { number: '99%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="py-16 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-2">-- About Organica --</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              We Provide Fresh & Organic Products
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are passionate about bringing you the freshest, highest quality organic 
              produce. Our commitment to sustainable farming practices and environmental 
              responsibility ensures that every product meets our strict quality standards.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-dark mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To provide our customers with the freshest, most nutritious organic 
                  produce while supporting sustainable farming practices that protect 
                  our environment for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;