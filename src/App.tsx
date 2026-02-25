/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Phone, ArrowRight, ShoppingBag, Menu, X, Utensils } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuData = [
    {
      category: "Burgers",
      items: [
        { name: "Veg. Burger", price: "120.00" },
        { name: "Veg. Cheese Burger", price: "150.00" },
        { name: "Paneer Cheese Burger", price: "180.00" }
      ]
    },
    {
      category: "Chill Mojito & Ice Tea",
      items: [
        { name: "Kiwi Mojito", price: "150.00" },
        { name: "Dashing Blue", price: "140.00" },
        { name: "Virgin Mojito", price: "130.00" },
        { name: "Peach Ice Tea", price: "120.00" }
      ]
    },
    {
      category: "Pizza",
      items: [
        { name: "Cheese Corn", price: "270.00" },
        { name: "Paneer Tikka", price: "320.00" },
        { name: "Margherita", price: "240.00" }
      ]
    },
    {
      category: "Pavbhaji Special",
      items: [
        { name: "Pav Bhaji", price: "140.00" },
        { name: "Paneer Pav Bhaji", price: "180.00" },
        { name: "Cheese Pav Bhaji", price: "230.00" }
      ]
    },
    {
      category: "Pulao",
      items: [
        { name: "Veg. Tawa Pulao", price: "140.00" },
        { name: "Cheese Tawa Pulao", price: "180.00" }
      ]
    },
    {
      category: "Maggie Delight",
      items: [
        { name: "Plain Maggi", price: "90.00" },
        { name: "Masala Maggi", price: "110.00" },
        { name: "Cheese Maggi", price: "140.00" }
      ]
    },
    {
      category: "Sandwich & Toasties",
      items: [
        { name: "Bread Butter", price: "80.00" },
        { name: "Bombay Masala", price: "160.00" },
        { name: "Veg. Cheese", price: "200.00" }
      ]
    },
    {
      category: "Coffee & Shakes",
      items: [
        { name: "Cold Coffee Regular", price: "90.00" },
        { name: "Hazelnut Coffee", price: "140.00" },
        { name: "Oreo Shake", price: "180.00" },
        { name: "KitKat Shake", price: "190.00" }
      ]
    },
    {
      category: "French Fries",
      items: [
        { name: "Classic Salted", price: "140.00" },
        { name: "Peri Peri Fries", price: "160.00" },
        { name: "Cheesy Fries", price: "210.00" }
      ]
    },
    {
      category: "Hot Beverages",
      items: [
        { name: "Adrak Wali Chai", price: "60.00" },
        { name: "Masala Chai", price: "70.00" },
        { name: "Hot Coffee", price: "80.00" }
      ]
    },
    {
      category: "Brownie Specials",
      items: [
        { name: "Walnut Brownie", price: "180.00" },
        { name: "Sizzling Brownie", price: "220.00" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal flex flex-col">
      {/* Navbar */}
      <nav className="border-b-2 border-charcoal bg-sand py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Nikhil's Kitchen Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden items-center justify-center w-10 h-10 bg-amber border-2 border-charcoal rounded-full text-charcoal font-serif font-bold text-xl shadow-hard-sm">
              N
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Nikhil's Kitchen</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-amber transition-colors">Home</a>
            <a href="#menu" className="hover:text-amber transition-colors">Menu</a>
            <a href="#visit-us" className="hover:text-amber transition-colors">Visit Us</a>
            <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
            <a href="#order" className="btn-artisanal rounded-full px-6 py-2 ml-4">
              Order Online
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 border-2 border-charcoal rounded-lg bg-cream shadow-hard-sm active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-sand border-b-2 border-charcoal flex flex-col font-medium shadow-hard-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 border-b border-charcoal/20 hover:bg-amber/10">Home</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 border-b border-charcoal/20 hover:bg-amber/10">Menu</a>
            <a href="#visit-us" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 border-b border-charcoal/20 hover:bg-amber/10">Visit Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 border-b border-charcoal/20 hover:bg-amber/10">Contact</a>
            <div className="p-6">
              <a href="#order" onClick={() => setMobileMenuOpen(false)} className="btn-artisanal rounded-full px-6 py-3 w-full justify-center">
                Order Online
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-charcoal bg-cream font-bold text-sm shadow-hard-sm">
                <Utensils className="w-4 h-4 text-amber" />
                Welcome to Nikhil's Kitchen
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1]">
                The Perfect Blend of <br/>
                <span className="text-amber">Taste & Comfort</span>
              </h1>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
                From sizzling Pav Bhaji to refreshing Mojitos, experience the finest street food and cafe classics crafted with love.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#order" className="btn-artisanal rounded-full px-8 py-4 text-lg">
                  Order Online <ShoppingBag className="w-5 h-5 ml-2" />
                </a>
                <a href="#menu" className="btn-artisanal rounded-full px-8 py-4 text-lg bg-cream hover:bg-sand">
                  View Menu <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* Decorative Image Frame */}
            <div className="relative max-w-md mx-auto lg:ml-auto w-full mt-8 lg:mt-0">
              {/* Offset solid background */}
              <div className="absolute inset-0 bg-amber rounded-[2rem] border-2 border-charcoal translate-x-6 translate-y-6"></div>
              {/* Main image container */}
              <div className="relative bg-cream rounded-[2rem] border-2 border-charcoal overflow-hidden aspect-[4/5] shadow-hard-lg">
                <img 
                  src="hero2.jpeg" 
                  alt="Delicious Food at Nikhil's Kitchen" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-cream border-2 border-charcoal p-4 rounded-xl shadow-hard flex items-center gap-4">
                <div className="w-12 h-12 bg-sand rounded-full border-2 border-charcoal flex items-center justify-center text-2xl">
                  🔥
                </div>
                <div>
                  <div className="font-bold">Hot & Fresh</div>
                  <div className="text-sm opacity-80">Served daily</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-6 bg-sand border-y-2 border-charcoal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Our Menu</h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                A diverse selection of mouth-watering dishes and refreshing beverages to satisfy every craving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.map((category, idx) => (
                <div key={idx} className="card-artisanal p-6 flex flex-col">
                  <h3 className="text-2xl font-serif font-medium mb-6 pb-4 border-b-2 border-charcoal/20 text-amber-hover">
                    {category.category}
                  </h3>
                  <div className="space-y-4 flex-grow">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-baseline gap-4">
                        <span className="font-medium text-lg leading-tight">{item.name}</span>
                        <div className="flex-grow border-b-2 border-dotted border-charcoal/30 relative top-[-6px]"></div>
                        <span className="font-bold whitespace-nowrap">₹ {item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section id="visit-us" className="py-20 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <div className="card-artisanal p-8 md:p-12 bg-sand flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-4xl font-serif font-medium mb-4">Visit Us</h2>
                  <p className="text-lg opacity-80">
                    Drop by to enjoy our cozy ambiance and delicious food. We can't wait to host you!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber border-2 border-charcoal shadow-hard-sm flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Location</h4>
                      <p className="opacity-80 leading-relaxed">
                        Shop No. 4, Ground Floor,<br/>
                        Sai Heritage Building,<br/>
                        Near Main Market, Pimpri-Chinchwad,<br/>
                        Pune, Maharashtra 411018
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber border-2 border-charcoal shadow-hard-sm flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-charcoal" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-xl mb-2">Opening Hours</h4>
                      <div className="space-y-2 opacity-80 w-full max-w-xs">
                        <div className="flex justify-between border-b border-charcoal/20 pb-1">
                          <span>Monday - Sunday</span>
                          <span className="font-medium">9:00 AM - 10:30 PM</span>
                        </div>
                        <div className="flex justify-between pt-1">
                          <span>Wednesday</span>
                          <span className="font-medium">9:00 AM - 10:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Map/Image Area */}
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-muted-teal rounded-full border-2 border-charcoal translate-x-4 translate-y-4"></div>
                  <div className="relative bg-cream rounded-full border-2 border-charcoal overflow-hidden w-full h-full shadow-hard flex items-center justify-center">
                    <img 
                      src="hero4.avif" 
                      alt="Cafe Exterior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-cream py-12 px-6 border-t-4 border-amber">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber border-2 border-cream rounded-full flex items-center justify-center text-charcoal font-serif font-bold text-xl">
              N
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Nikhil's Kitchen</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" /> +91 98765 43210
            </a>
          </div>

          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Nikhil's Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
