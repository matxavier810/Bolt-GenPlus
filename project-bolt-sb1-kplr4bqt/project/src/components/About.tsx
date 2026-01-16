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
                GenPlus Solutions Inc. is an emerging startup committed to delivering comprehensive IT services and
                innovative technology solutions. Though we're a new company, we've assembled a team of experienced
                professionals and skilled engineers ready to tackle your most complex challenges.
              </p>
              <p>
                Our service portfolio includes custom software development, industrial computing solutions, IT consulting,
                and automation services. We bring fresh perspectives combined with proven expertise to help businesses
                transform their operations through technology.
              </p>
              <p>
                Whether you're looking to build a custom application, implement rugged computing solutions, receive
                strategic IT guidance, or automate your data workflows, our experienced team is ready to deliver
                exceptional results and grow alongside your business.
              </p>
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
