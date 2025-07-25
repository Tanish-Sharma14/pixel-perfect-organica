import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-vegetables-basket.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              25% off all products.
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Qualityful{' '}
              <span className="text-primary">organic</span>
              <br />
              fruit & vegetables.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Experience the finest selection of fresh, organic produce delivered across India. 
              Supporting sustainable farming practices for a healthier tomorrow.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-green transition-all duration-normal hover:shadow-lg hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Fresh organic vegetables basket"
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-semibold animate-bounce-gentle">
                Fresh!
              </div>
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse-green">
                Organic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;