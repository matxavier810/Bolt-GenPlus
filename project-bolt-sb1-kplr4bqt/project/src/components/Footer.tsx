import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Custom Software & App Development',
      'Industrial & Rugged Computing',
      'IT Consulting & Strategic Support',
      'Automation & Data Visualization',
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Contact',
    ],
    resources: [
      'Blog',
      'Case Studies',
      'Support',
      'Privacy Policy',
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/GenPlus Logo and Slogan.png"
                alt="GenPlus Solutions Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">GenPlus Solutions</h3>
                <p className="text-sm text-gray-400">Inc.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              An emerging startup with experienced professionals delivering comprehensive
              IT services and innovative technology solutions for modern businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@genplussolutions.com" className="hover:text-white transition-colors">
                  info@genplussolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+15484688982" className="hover:text-white transition-colors">
                  +1 (548) 468-8982
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>322 Springbank Ave N, Woodstock, ON N4S7R6</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button className="text-sm hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button className="text-sm hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button className="text-sm hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {currentYear} GenPlus Solutions Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-sm hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
