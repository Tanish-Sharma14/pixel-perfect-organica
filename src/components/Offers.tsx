import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import vegetablePackageImage from '@/assets/product-vegetable-package.jpg';
import chickenImage from '@/assets/offer-chicken.jpg';

const Offers = () => {
  const offers = [
    {
      id: 1,
      image: vegetablePackageImage,
      discount: 'Up To 25% Off',
      title: 'Fresh vegetables package.',
      description: 'Organic and pesticide-free vegetables',
    },
    {
      id: 2,
      image: chickenImage,
      discount: 'Up To 25% Off',
      title: 'Healthy & fresh Chicken, Mutton, or Fish.',
      description: 'Premium quality organic meat and fish',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card 
              key={offer.id} 
              className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-normal hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                      {offer.discount}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white/80 mb-4">{offer.description}</p>
                    
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;