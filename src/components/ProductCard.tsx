import { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  isOrganic?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onAddToWishlist, onQuickView }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    onAddToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(product);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-warning fill-warning'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group relative overflow-hidden border hover:shadow-lg transition-all duration-normal hover:scale-105">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-slow"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isOrganic && (
              <Badge className="bg-success text-success-foreground">
                Organic
              </Badge>
            )}
            {product.isSale && discountPercentage > 0 && (
              <Badge className="bg-warning text-warning-foreground">
                -{discountPercentage}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={handleAddToWishlist}
            >
              <Heart 
                className={`h-4 w-4 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-dark'}`} 
              />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={() => onQuickView(product)}
            >
              <Eye className="h-4 w-4 text-dark" />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-normal">
            <Button
              className="w-full rounded-none bg-primary hover:bg-primary-hover"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>
          
          <h3 className="font-semibold text-dark mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.category}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;