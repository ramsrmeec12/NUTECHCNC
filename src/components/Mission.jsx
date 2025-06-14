import React from 'react';

const Mission= () => {
  const sections = [
    {
      title: 'Our Vision',
      emoji: '🎯',
      color: 'from-yellow-400 to-yellow-200',
      items: [
        'Adopt the latest technology in precision mold making and CNC machining.',
        'Deliver top-quality products & services at the best prices.',
        'Ensure timely delivery with advanced production techniques.',
      ],
    },
    {
      title: 'Our Mission',
      emoji: '🚀',
      color: 'from-blue-400 to-blue-200',
      items: [
        'Improve global business with assured quality in deliverables.',
        'Always meet committed timelines.',
        'Foster a safe, pleasant & stress-free environment.',
      ],
    },
    {
      title: 'Our Strategies',
      emoji: '🧠',
      color: 'from-green-400 to-green-200',
      items: [
        'Maintain win-win relationships with customers & stakeholders.',
        'Explore global business opportunities.',
        'Replace metal components with plastic where feasible.',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Vision, Mission & Strategy</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 bg-gradient-to-br ${section.color} p-6 text-gray-900`}
          >
            <div className="text-4xl mb-4">{section.emoji}</div>
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
