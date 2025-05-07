import React from 'react';

const activities = [
  {
    title: "10X Technical Club",
    role: "Corporate Associate ",
    duration: "2023 - 2025",
    description: "Organizing technical workshops and events, mentoring junior students in programming",
    achievements: [
      "Organized successful hackathons",
      "Conducted workshops on web development",
      
    ]
  },
  // {
  //   title: "Competitive Programming",
  //   role: "Participant",
  //   duration: "2021 - Present",
  //   description: "Active participant in coding competitions and hackathons",
  //   achievements: [
  //     "Secured rank under 1000 in Google Kickstart",
  //     "5⭐ on CodeChef",
  //     "Solved 500+ problems across platforms"
  //   ]
  // },
  // {
  //   title: "Open Source Contributions",
  //   role: "Contributor",
  //   duration: "2022 - Present",
  //   description: "Contributing to open source projects and building community",
  //   achievements: [
  //     "Contributed to 5+ open source projects",
  //     "Fixed critical bugs in popular repositories",
  //     "Created documentation for beginners"
  //   ]
  // }
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-accent bg-opacity-20">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">Activities & Achievements</h2>
        
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-primary">{activity.title}</h3>
                <span className="text-secondary font-medium">{activity.duration}</span>
              </div>
              <p className="text-lg font-medium mb-2 text-secondary">{activity.role}</p>
              <p className="mb-4">{activity.description}</p>
              <div className="mt-4">
                <p className="font-medium text-primary mb-2">Key Achievements:</p>
                <ul className="list-disc list-inside space-y-2">
                  {activity.achievements.map((achievement, i) => (
                    <li key={i} className="text-secondary">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;