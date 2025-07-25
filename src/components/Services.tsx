import { Truck, CreditCard, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on all orders over ₹500',
    },
    {
      icon: CreditCard,
      title: 'Safe Payment',
      description: 'Safe and secure payment methods',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Available support for customer help',
    },
  ];

  return (
    <section className="bg-gradient-service py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-normal"
            >
              <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors duration-normal">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;