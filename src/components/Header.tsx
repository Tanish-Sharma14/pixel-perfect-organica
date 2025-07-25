import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
}

const Header = ({ cartCount, wishlistCount, onCartClick, onWishlistClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', active: true },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-dark text-dark-foreground py-2 text-center text-sm">
        <span className="text-success font-medium">Free shipping for all order of ₹500</span>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-dark">
                Green<span className="text-primary">Basket</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    item.active ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith('/')) {
                      e.preventDefault();
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden lg:flex items-center">
                {isSearchVisible ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-64"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsSearchVisible(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchVisible(true)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={onWishlistClick}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchVisible && (
            <div className="lg:hidden py-4 border-t border-border">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    item.active ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (item.href.startsWith('/')) {
                      e.preventDefault();
                      window.location.href = item.href;
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;