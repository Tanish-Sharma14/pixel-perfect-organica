import { useState } from 'react';
import { Leaf, Fish, Apple, Milk } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from '@/components/ProductCard';
import bananasImage from '@/assets/product-bananas.jpg';
import lettuceImage from '@/assets/product-lettuce.jpg';
import applesImage from '@/assets/product-apples.jpg';
import vegetablePackageImage from '@/assets/product-vegetable-package.jpg';
import chickenImage from '@/assets/offer-chicken.jpg';
import muttonImage from '@/assets/product-mutton.jpg';
import fishImage from '@/assets/product-fish.jpg';

interface ProductsProps {
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

const Products = ({ onAddToCart, onAddToWishlist, onQuickView }: ProductsProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Leaf },
    { id: 'vegetables', name: 'Fresh Vegetables', icon: Leaf },
    { id: 'meat', name: 'Fish & Meat', icon: Fish },
    { id: 'fruits', name: 'Healthy Fruit', icon: Apple },
    { id: 'dairy', name: 'Dairy Products', icon: Milk },
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Fresh Bananas',
      price: 120.99,
      originalPrice: 145.99,
      rating: 4.5,
      reviews: 25,
      image: bananasImage,
      category: 'fruits',
      inStock: true,
      isOrganic: true,
      isSale: true,
    },
    {
      id: '2',
      name: 'Green Lettuce',
      price: 85.50,
      rating: 4.8,
      reviews: 15,
      image: lettuceImage,
      category: 'vegetables',
      inStock: true,
      isOrganic: true,
    },
    {
      id: '3',
      name: 'Red Apples',
      price: 180.99,
      originalPrice: 210.99,
      rating: 4.3,
      reviews: 32,
      image: applesImage,
      category: 'fruits',
      inStock: true,
      isOrganic: true,
      isSale: true,
    },
    {
      id: '4',
      name: 'Vegetable Package',
      price: 450.99,
      rating: 4.7,
      reviews: 18,
      image: vegetablePackageImage,
      category: 'vegetables',
      inStock: true,
      isOrganic: true,
    },
    {
      id: '5',
      name: 'Fresh Chicken',
      price: 320.99,
      rating: 4.6,
      reviews: 42,
      image: chickenImage,
      category: 'meat',
      inStock: true,
      isOrganic: true,
    },
    {
      id: '6',
      name: 'Fresh Mutton',
      price: 650.99,
      rating: 4.4,
      reviews: 28,
      image: muttonImage,
      category: 'meat',
      inStock: true,
      isOrganic: true,
    },
    {
      id: '7',
      name: 'Fresh Fish',
      price: 280.99,
      rating: 4.7,
      reviews: 35,
      image: fishImage,
      category: 'meat',
      inStock: true,
      isOrganic: true,
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleAddToCart = (product: Product) => {
    // This will be passed down from the parent component
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleAddToWishlist = (product: Product) => {
    // This will be passed down from the parent component
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const handleQuickView = (product: Product) => {
    // This will be passed down from the parent component
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">-- Organic Products --</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-8">
            All Organic Products
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-normal ${
                    activeFilter === category.id
                      ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-green'
                      : 'hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                onQuickView={handleQuickView}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-normal"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;