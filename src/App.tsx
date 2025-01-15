import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Zap, Shield, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white">SaaSFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-indigo-200">Features</a>
              <a href="#pricing" className="text-white hover:text-indigo-200">Pricing</a>
              <a href="#testimonials" className="text-white hover:text-indigo-200">Testimonials</a>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Transform Your Workflow with SaaSFlow
            </h1>
            <p className="text-xl text-indigo-100 mb-12">
              Streamline your business operations with our all-in-one platform. Boost productivity and scale your success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Everything you need to succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
                title: "Advanced Analytics",
                description: "Get deep insights into your business performance with real-time analytics and reporting."
              },
              {
                icon: <Zap className="h-8 w-8 text-indigo-600" />,
                title: "Lightning Fast",
                description: "Experience blazing-fast performance with our optimized infrastructure."
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Enterprise Security",
                description: "Keep your data safe with enterprise-grade security and compliance features."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Simple, transparent pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "29",
                features: ["5 Team Members", "10GB Storage", "Basic Analytics"]
              },
              {
                name: "Professional",
                price: "99",
                features: ["Unlimited Team Members", "100GB Storage", "Advanced Analytics", "Priority Support"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "299",
                features: ["Unlimited Everything", "Custom Integration", "24/7 Support", "Dedicated Manager"]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm p-8 ${plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''}`}>
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Trusted by industry leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SaaSFlow has completely transformed how we manage our operations. The analytics features are incredible.",
                author: "Sarah Johnson",
                role: "CEO at TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
              },
              {
                quote: "The best investment we've made for our business. The platform is intuitive and the support is outstanding.",
                author: "Michael Chen",
                role: "CTO at StartupX",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
              },
              {
                quote: "We've seen a 300% increase in productivity since implementing SaaSFlow. It's a game-changer.",
                author: "Emily Davis",
                role: "COO at GrowthCo",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join thousands of companies that trust SaaSFlow to power their business operations.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold text-white">SaaSFlow</span>
              </div>
              <p className="text-sm">
                Empowering businesses with intelligent solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} SaaSFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;