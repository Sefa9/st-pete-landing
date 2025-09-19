import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formspree'ye gönder
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/mwpngqzk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          business: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-navy/95 to-navy-light/95 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="St. Petersburg Web Development" 
                className="h-16 w-16 object-contain"
              />
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-white hover:text-gray-200 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#why-us" className="text-white hover:text-gray-200 transition-colors duration-300 font-medium">
                Why Us
              </a>
              <a href="#portfolio" className="text-white hover:text-gray-200 transition-colors duration-300 font-medium">
                Portfolio
              </a>
              <a href="#testimonials" className="text-white hover:text-gray-200 transition-colors duration-300 font-medium">
                Reviews
              </a>
            </nav>
            
            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="bg-white text-navy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md border-2 border-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/background.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy-light/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Hero Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/logo.png" 
                alt="St. Petersburg Web Development" 
                className="h-auto w-50 object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Your Business Deserves a Website That Works as Hard as You Do.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up">
              In St. Petersburg, Florida, we build fast, modern, and client-winning websites.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why St. Petersburg Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand local business needs and deliver results that matter to your bottom line.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Launch Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Websites ready in days, not months. We know your time is valuable, so we deliver quickly without compromising quality.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Mobile-First</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for all devices. Your customers browse on their phones - your website should look perfect there.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Grow Sales</h3>
              <p className="text-gray-600 leading-relaxed">
                Designed to convert visitors into customers. Every element is strategically placed to drive business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped St. Petersburg businesses establish their online presence and grow their customer base.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/1.png" 
                  alt="Restaurant Website" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Local Bistro</h3>
                <p className="text-gray-600">Online ordering system increased sales by 40%</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/2.png" 
                  alt="Law Firm Website" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Legal Practice</h3>
                <p className="text-gray-600">Professional site that builds trust and credibility</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/3.png" 
                  alt="Retail Store" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Local Boutique</h3>
                <p className="text-gray-600">E-commerce platform doubled online revenue</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/4.png" 
                  alt="Service Business" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">Service Company</h3>
                <p className="text-gray-600">Modern website that converts visitors into customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our St. Petersburg Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "They delivered exactly what we needed - a professional website that actually brings in customers. Our online bookings increased 60% in the first month!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-navy">Sarah Martinez</p>
                  <p className="text-gray-500">Spa Owner, Downtown St. Pete</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Fast, professional, and results-driven. They understood our business goals and created a website that converts visitors into paying customers."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-navy">Mike Johnson</p>
                  <p className="text-gray-500">Contractor, St. Petersburg</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Their attention to detail and understanding of local market made all the difference. We're now the go-to choice in our neighborhood."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold">
                  LR
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-navy">Lisa Rodriguez</p>
                  <p className="text-gray-500">Boutique Owner, Central Ave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Project Today
              </h2>
              <p className="text-xl text-gray-200">
                Ready to grow your St. Petersburg business online? Let's discuss your project and get started.
              </p>
            </div>
            
            <form 
              action="https://formspree.io/f/mwpngqzk" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="bg-white rounded-xl p-8 text-gray-800"
            >
              {/* Hidden input for Formspree */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from St. Pete Landing Page" />
              <input type="hidden" name="_replyto" value="" />
              <input type="hidden" name="_next" value="http://localhost:3000" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="Your Business Name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="john@yourbusiness.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all"
                    placeholder="(727) 555-0123"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Describe your business needs, goals, and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-light transition-all duration-300 transform hover:scale-105"
              >
                Request a Call Back
              </button>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                We'll contact you within 24 hours to discuss your project and provide a free consultation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">St. Petersburg Web Development</h3>
            <p className="text-gray-400 mb-4">
              Professional websites that help local businesses grow and succeed online.
            </p>
            <p className="text-gray-400">
              Serving St. Petersburg, Tampa Bay, and surrounding Florida communities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

