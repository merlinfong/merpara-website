import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Globe, 
  TrendingUp, 
  Layers, 
  Users, 
  X, 
  Menu,
  Scissors,
  Truck,
  Rocket
} from 'lucide-react';

/**
 * MERPARA - LIQUID GLASS DESIGN SYSTEM
 * Based on Apple's modern aesthetic: Frosted glass, depth, subtle gradients.
 */

// --- DATA SOURCE (Based on PDF) ---

const TEAM_MEMBERS = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    desc: "Drives cross-border strategy and ROI-focused execution.",
    icon: "🇨🇳"
  },
  {
    name: "Matthew Joy",
    role: "Co-Founder & Partnerships",
    desc: "Aligns long-term vision and content roadmap in the U.S.",
    icon: "🇺🇸"
  },
  {
    name: "Anastasia Cui",
    role: "Co-founder & COO",
    desc: "Leads product development and China supply-chain operations.",
    icon: "🇨🇳"
  },
  {
    name: "Jenny Paola Cubillos",
    role: "Marketing Lead",
    desc: "Designs global influencer and social strategies.",
    icon: "🇨🇴"
  },
  {
    name: "Felicia Joy",
    role: "Creative Director",
    desc: "Turns brand DNA into cohesive visuals and social content.",
    icon: "🇺🇸"
  },
  {
    name: "Will Guo",
    role: "Fashion Design Lead",
    desc: "Translates aesthetics into production-ready designs.",
    icon: "🇨🇳"
  }
];

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Brand Discovery",
    desc: "We align on your vision, audience, and market insights to ensure a solid foundation.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Product Planning",
    desc: "Developing concepts, themes, and price points that resonate with your target audience.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Design & Sampling",
    desc: "Creating prototypes and ensuring fit/quality through your feedback.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Production",
    desc: "Managing manufacturing, quality control in China, and logistics.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Launch Support",
    desc: "Warehousing, shipping logistics, and marketing strategies for entrance.",
    icon: <Rocket className="w-6 h-6" />
  }
];

// Constructed Service Packages based on "Service Fees Explained" in PDF
const PACKAGES = [
  {
    id: "pkg_discovery",
    name: "The Visionary",
    subtitle: "Brand Discovery Phase",
    price: 999,
    features: [
      "Brand DNA Analysis",
      "Audience Niche Strategy",
      "Initial Collection Concept",
      "Market Price Positioning",
      "Dedicated Strategist Call"
    ],
    recommended: false
  },
  {
    id: "pkg_sampling",
    name: "The Creator",
    subtitle: "Design & Sampling Phase",
    price: 2499,
    features: [
      "Includes 'Visionary' features",
      "Tech Pack Creation (3 SKUs)",
      "Fabric Sourcing & Selection",
      "First Prototype Production",
      "Fitting Review Session"
    ],
    recommended: true
  },
  {
    id: "pkg_launch",
    name: "The Icon",
    subtitle: "Full Production Setup",
    price: 4999,
    features: [
      "Includes 'Creator' features",
      "Supply Chain Setup",
      "Quality Control Management",
      "Logistics & Warehousing Plan",
      "Go-to-Market Strategy",
      "Ongoing Operations Support"
    ],
    recommended: false
  }
];

// --- COMPONENTS ---

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <motion.div 
    whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
    className={`bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Navbar = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/60 backdrop-blur-xl shadow-lg border border-white/40' : 'bg-transparent'}`}>
          
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">MERPARA</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <a href="#vision" className="hover:text-black transition-colors">Vision</a>
            <a href="#process" className="hover:text-black transition-colors">Process</a>
            <a href="#team" className="hover:text-black transition-colors">Team</a>
            <a href="#pricing" className="hover:text-black transition-colors">Services</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenCart}
              className="relative p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-medium text-gray-800">
              <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Services</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CartModal = ({ isOpen, onClose, cart, onRemove }) => {
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-white/60"
      >
        <div className="p-6 border-b border-gray-200/50 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Your Selection</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 min-h-[200px] max-h-[60vh] overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-white/50 p-4 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">${item.price}</span>
                    <button 
                      onClick={() => onRemove(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-6 bg-white/50 border-t border-gray-200/50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-600">Total</span>
            <span className="text-3xl font-bold text-gray-900">${total.toLocaleString()}</span>
          </div>
          <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black transition-colors shadow-lg shadow-gray-900/20 active:scale-95 transform duration-200">
            Proceed to Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN APP ---

export default function MerparaApp() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (pkg) => {
    setCart([...cart, pkg]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-200/30 rounded-full blur-[120px]" />
      </div>

      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      <AnimatePresence>
        {isCartOpen && (
          <CartModal 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cart={cart}
            onRemove={removeFromCart}
          />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 min-h-screen flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-sm font-semibold tracking-wide mb-6 uppercase text-gray-600 shadow-sm">
              Powered by China's Leading Supply Chain
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 leading-[1.1]">
              Transform your influence <br />
              into a fashion brand.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              Merpara partners with influencers to bring unique styles to market.
              Boutique design, agile production, and data-backed success.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-black transition-all shadow-xl shadow-gray-900/30 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Start Your Brand
              </button>
              <button 
                onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/50 backdrop-blur-md border border-white text-gray-900 text-lg font-semibold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                How it Works
              </button>
            </div>
          </motion.div>

          {/* Floating abstract UI elements representing fashion sketches/swatches */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[5%] md:left-[10%] -z-10"
          >
            <div className="w-32 h-40 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl rotate-[-12deg]" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[5%] md:right-[10%] -z-10"
          >
            <div className="w-40 h-32 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl rotate-[6deg]" />
          </motion.div>
        </div>
      </section>

      {/* VISION / ABOUT */}
      <section id="vision" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Your trusted global partner in fashion.">Who We Are</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🌍</div>
              <h3 className="text-xl font-bold mb-3">Cross-Border Expertise</h3>
              <p className="text-gray-500 leading-relaxed">
                Over 10 years experience bridging the gap between Western Influencers and Chinese manufacturing excellence.
              </p>
            </GlassCard>
            
            <GlassCard>
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🤝</div>
              <h3 className="text-xl font-bold mb-3">Global Presence</h3>
              <p className="text-gray-500 leading-relaxed">
                Teams in China, US, and Latin America providing localized support and navigating international markets.
              </p>
            </GlassCard>
            
            <GlassCard>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">📈</div>
              <h3 className="text-xl font-bold mb-3">ROI-Driven Approach</h3>
              <p className="text-gray-500 leading-relaxed">
                We combine strategic planning with operational efficiency to maximize your brand's growth and profitability.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* WORKFLOW PROCESS */}
      <section id="process" className="py-24 px-6 bg-white/30 backdrop-blur-3xl relative z-10 border-y border-white/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="A complete path from concept to collection.">The Journey</SectionTitle>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            
            <div className="grid md:grid-cols-5 gap-6">
              {WORKFLOW_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-white shadow-xl border border-white/50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-gray-800">{step.icon}</div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-gray-100">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section id="pricing" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Transparent service fees. No hidden costs.">Start Your Collection</SectionTitle>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className={`relative ${pkg.recommended ? 'lg:-mt-8' : ''}`}>
                <GlassCard 
                  className={`relative flex flex-col h-full ${pkg.recommended ? 'border-gray-400/50 shadow-2xl bg-white/60' : ''}`}
                  hoverEffect={false}
                >
                  {pkg.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-500">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-gray-500">/ project</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => addToCart(pkg)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2
                      ${pkg.recommended 
                        ? 'bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-900/20' 
                        : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
                  >
                    Select Plan <ArrowRight className="w-4 h-4" />
                  </button>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto bg-white/40 p-4 rounded-xl backdrop-blur-sm inline-block border border-white/50">
              * Note: Production costs (manufacturing actual garments) are calculated separately based on quantity and materials. These fees cover strategy, design, and operational management.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 px-6 bg-white/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Global expertise. Local insights.">Leadership Team</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <GlassCard key={index} className="flex flex-col items-center text-center p-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden relative shadow-inner">
                  {/* Placeholder for real images */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-300 flex items-center justify-center text-4xl">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  {member.name} 
                  <span className="text-sm opacity-80" title="Location">{member.icon}</span>
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{member.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white/80 backdrop-blur-2xl border-t border-white/20 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">MERPARA</h2>
            <p className="text-gray-500 text-sm">Empowering brands through authentic connections.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="mailto:merlin@merpara.com" className="hover:text-black flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Merpara. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
