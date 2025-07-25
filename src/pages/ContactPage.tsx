import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with us for any questions, concerns, or feedback
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-card rounded-lg shadow-organic">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Our Store</h3>
                <p className="text-muted-foreground">
                  Shop No. 42, Green Market Complex<br />
                  Bandra West, Mumbai - 400050<br />
                  Maharashtra, India
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-organic">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  +91 98765 43210<br />
                  +91 87654 32109<br />
                  Toll Free: 1800-123-4567
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-organic">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  info@greenbasket.com<br />
                  support@greenbasket.com<br />
                  orders@greenbasket.com
                </p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg shadow-organic">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Fri: 9:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-service-bg">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have a question, suggestion, or need help with your order? 
                  We'd love to hear from you. Fill out the form below and 
                  we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Come visit our flagship store in Mumbai to see our fresh produce 
                  firsthand and meet our team. We're located in the heart of Bandra West, 
                  easily accessible by public transport.
                </p>
                
                {/* Map placeholder */}
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-6">
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">How to Reach Us</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>By Train:</strong> Bandra Station (Western Line) - 5 min walk
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By Bus:</strong> Multiple BEST buses stop at Bandra West
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By Car:</strong> Ample parking available in the complex
                    </p>
                    <p className="text-muted-foreground">
                      <strong>By Auto/Taxi:</strong> Available from all major points in Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What are your delivery areas?</h3>
                  <p className="text-muted-foreground">
                    We currently deliver across Mumbai, Delhi, Bangalore, Pune, and Hyderabad. 
                    We're expanding to more cities soon!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">How fresh are your products?</h3>
                  <p className="text-muted-foreground">
                    All our products are harvested within 24-48 hours of delivery. 
                    We maintain cold chain logistics to ensure maximum freshness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer organic certification?</h3>
                  <p className="text-muted-foreground">
                    Yes, all our organic products are certified by authorized agencies. 
                    You can view certificates on our website or app.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit/debit cards, UPI, net banking, 
                    digital wallets, and cash on delivery.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I return products if not satisfied?</h3>
                  <p className="text-muted-foreground">
                    Yes, we have a 100% satisfaction guarantee. Contact us within 
                    24 hours of delivery for returns or refunds.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you have a mobile app?</h3>
                  <p className="text-muted-foreground">
                    Yes! Download the GreenBasket app from Google Play Store or 
                    Apple App Store for easy ordering and exclusive deals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;