import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const faqs = [
    {
      question: "How does SupplyAI's matching algorithm work?",
      answer: "Our AI algorithm analyzes multiple factors including your requirements, supplier capabilities, past performance, pricing, and market trends to provide the most accurate matches. The system continuously learns from user feedback to improve recommendations."
    },
    {
      question: "What types of suppliers are available on the platform?",
      answer: "We have a diverse network of verified suppliers across various industries including manufacturing, agriculture, technology, textiles, and more. All suppliers go through a rigorous verification process before joining our platform."
    },
    {
      question: "How do you ensure supplier quality and reliability?",
      answer: "We use a comprehensive vetting process that includes background checks, financial stability assessment, quality certifications verification, and continuous performance monitoring based on user reviews and delivery metrics."
    },
    {
      question: "What are the pricing plans for SupplyAI?",
      answer: "We offer flexible pricing plans tailored to different business sizes and needs. Contact our sales team for a personalized quote based on your specific requirements and usage volume."
    },
    {
      question: "Can I integrate SupplyAI with my existing procurement systems?",
      answer: "Yes, SupplyAI offers API integrations and supports various enterprise systems including ERP, procurement software, and inventory management systems. Our technical team can assist with seamless integration."
    },
    {
      question: "How quickly can I start finding suppliers?",
      answer: "You can start searching for suppliers immediately after signing up. The AI matching process typically takes less than 2 seconds to generate initial recommendations, and you can begin connecting with suppliers right away."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@supplyai.com",
      subValue: "support@supplyai.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      subValue: "24/7 Support Available"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123 Innovation Drive",
      subValue: "San Francisco, CA 94105"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      subValue: "Emergency support: 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about SupplyAI? We're here to help you optimize your supply chain 
            and connect with the right suppliers for your business needs.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-[#0B1222]">{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                    <p className="text-[#00E3FF] mb-1">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.subValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or ask any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00E3FF] text-[#0B1222] py-3 px-6 rounded-lg font-semibold hover:bg-[#00E3FF]/90 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700/30 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#00E3FF] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;