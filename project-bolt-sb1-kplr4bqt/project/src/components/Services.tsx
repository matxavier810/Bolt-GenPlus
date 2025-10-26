import { Code, Users, Laptop, Palette, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom applications, data workflow solutions, and advanced data visualization tools designed to streamline your operations and drive business growth.',
      features: [
        'Custom Web & Mobile Applications',
        'Data Workflow Automation',
        'Interactive Data Visualization',
        'API Integration & Development',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert recruiting and resource management to connect you with the right talent. We help you build high-performing teams aligned with your business goals.',
      features: [
        'Technology Consulting – Helping you choose the right tech stack and roadmap.',
        'Resource Augmentation – Providing skilled developers, data engineers, and IT professionals to extend your team.',
        'Process Optimization – Project Consulting, Identifying inefficiencies and building streamlined digital workflows.',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Laptop,
      title: 'Industrial Computing',
      description: 'Comprehensive sales and service of industrial-grade computing equipment built for demanding environments and mission-critical operations.',
      features: [
        'Rackmount, Industrial & Panel PCs – Reliable computing systems for industrial applications',
        'Rugged Laptops & Tablets – Built to withstand harsh environments',
        'Single-Board Computers & Accessories – Flexible solutions for custom projects',
        'Support & Maintenance – Installation, troubleshooting, and ongoing service support',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Palette,
      title: 'Digital Imaging & Printing',
      description: 'Professional digital imaging and printing services for all your branding and marketing needs, from business materials to personalized products.',
      features: [
        'Business Cards & Letterheads',
        'Wedding & Event Cards',
        'Photo Editing & Restoration',
        'Custom Printing (Mugs, Shirts, Metal)',
      ],
      color: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to meet your business challenges and accelerate growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="group/btn inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
