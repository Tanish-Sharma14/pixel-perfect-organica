import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Products from '@/components/Products';
import ShoppingCart from '@/components/ShoppingCart';
import { Product } from '@/components/ProductCard';
import { useToast } from '@/hooks/use-toast';

interface CartItem extends Product {
  quantity: number;
}

const Shop = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      const isAlreadyInWishlist = prevItems.some(item => item.id === product.id);
      
      if (isAlreadyInWishlist) {
        const newItems = prevItems.filter(item => item.id !== product.id);
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        });
        return newItems;
      } else {
        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        });
        return [...prevItems, product];
      }
    });
  };

  const handleQuickView = (product: Product) => {
    toast({
      title: "Quick View",
      description: `Opening quick view for ${product.name}`,
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => {}}
      />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Fresh Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our wide selection of fresh, organic produce sourced directly from Indian farms
            </p>
          </div>
        </section>

        {/* Products Section */}
        <Products
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          onQuickView={handleQuickView}
        />
      </main>
      
      <Footer />

      {/* Shopping Cart Sidebar */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default Shop;