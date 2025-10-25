import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'News & Press', href: '#' },
        { name: 'Contact Us', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Property Owners', href: '#' },
        { name: 'MNOs & TowerCos', href: '#' },
        { name: 'Lease Optimization', href: '#' },
        { name: 'Site Acquisition', href: '#' },
        { name: 'Consulting Services', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resource Center', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'White Papers', href: '#' },
        { name: 'Industry Reports', href: '#' },
        { name: 'FAQs', href: '#' }
      ]
    }
  ];

  const industryNews = [
    {
      title: "America's Struggling Farmers Face Even More Uncertainty",
      href: '#'
    },
    {
      title: 'Growing connections: The challenges and opportunities of achieving ubiquitous 5G mobile connectivity in the UK',
      href: '#'
    }
  ];

  const apwNews = [
    {
      title: 'EQT and PSP complete acquisition of Radius Global Infrastructure',
      href: '#'
    }
  ];

  const blogPosts = [
    {
      title: 'The History of Transatlantic Telegraph Cables: Pioneering the Global Communication Revolution',
      href: '#'
    },
    {
      title: 'From Switchboards to the Cloud: The Evolution of Telephone Exchanges',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/images/apwireless-logo-white.png" 
              alt="APWireless" 
              className="h-8 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading global wireless infrastructure solutions provider, connecting communities and enabling technological advancement worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="footer-link text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* News Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div>
            <h3 className="font-semibold text-white mb-4">Industry News</h3>
            <div className="space-y-4">
              {industryNews.map((news, index) => (
                <a key={index} href={news.href} className="block footer-link text-sm leading-relaxed">
                  {news.title}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">APWireless In The News</h3>
            <div className="space-y-4">
              {apwNews.map((news, index) => (
                <a key={index} href={news.href} className="block footer-link text-sm leading-relaxed">
                  {news.title}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Recent Blog Posts</h3>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <a key={index} href={post.href} className="block footer-link text-sm leading-relaxed">
                  {post.title}
                </a>
              ))}
            </div>
            
            {/* Most Loved Workplace Badge */}
            <div className="mt-8">
              <img 
                src="/images/most-loved-workplace-badge.png" 
                alt="Most Loved Workplace Certified" 
                className="w-24 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 APWireless Infrastructure Partners, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="footer-link text-sm">Privacy Policy</a>
            <a href="#" className="footer-link text-sm">Terms of Service</a>
            <a href="#" className="footer-link text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;