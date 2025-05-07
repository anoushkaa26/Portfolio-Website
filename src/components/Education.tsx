import React from 'react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    location: "Kattankulathur, India",
    duration: "2022 - 2026",
    description: "Currently pursuing B.Tech with 9.84 CGPA"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Carmel High  School",
    location: "Patna, India",
    duration: "2019 - 2021",
    description: "Completed ICSE board with 95%",
    // achievements: ["School topper in Computer Science", "Member of School's Tech Club"]
  },
  {
    degree: "Secondary School (10th)",
    institution: "Carmel High School",
    location: "Patna, India",
    duration: "2019",
    description: "Completed ICSE board with 90.4%",
    // achievements: ["School rank 3", "Perfect score in Mathematics"]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-accent bg-opacity-20">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                <span className="text-secondary font-medium">{edu.duration}</span>
              </div>
              <p className="text-lg font-medium mb-1">{edu.institution}</p>
              <p className="text-secondary mb-4">{edu.location}</p>
              <p className="mb-2">{edu.description}</p>
              {/* {edu.achievements && (
                <div className="mt-4">
                  <p className="font-medium text-primary mb-2">Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-secondary">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;