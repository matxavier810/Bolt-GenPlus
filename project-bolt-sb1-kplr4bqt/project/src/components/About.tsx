import { Target, Lightbulb, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative IT solutions that drive efficiency, growth, and competitive advantage in the digital age.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that keep our clients at the forefront of their industries.',
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Excellence in every project, from custom software to industrial hardware solutions, ensuring reliability and performance.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Partnership',
      description: 'We view our client relationships as long-term partnerships, committed to supporting your business growth at every stage.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About GenPlus Solutions
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                GenPlus Solutions Inc. is your trusted partner for comprehensive IT services and solutions.
                At GenPlus Solutions Inc, we believe technology should work for you — not against you.
              </p>
              <p>
                Our diverse service portfolio spans custom software development, IT consulting, industrial computing solutions, and digital imaging services. This unique combination allows us to serve as a one-stop solution for all your technology needs.
              </p>
              <p>
                Whether you're looking to build a custom application, upgrade your industrial computing infrastructure, find the right talent for your team, or create professional marketing materials, our experienced team is ready to deliver exceptional results. We are a passionate team of developers, engineers, and consultants who design, build, and deliver customized software solutions that solve real business challenges.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="bg-cyan-50 border border-cyan-100 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-600">200+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
