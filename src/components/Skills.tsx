import React from 'react';

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "VS Code",
    icon: "/vscode-logo.png",
  },
  {
    name: "Canva",
    icon: "/canva.svg",
  },
  {
    name: "Github",
    icon: "/github_logo.webp"
  },
  {
    name: "Bootstrap",
    icon: "/Bootstrap_logo.svg.png",
  },
  {
    name:"ML",
    icon: "/ml.png"
  }
  
  
  
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-accent bg-opacity-20">
      <div className="section-container">
        <h2 className="section-heading text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-16 h-16 mb-3"
              />
              <p className="font-medium text-primary">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;